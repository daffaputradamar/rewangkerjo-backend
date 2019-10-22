import { Request, Response } from 'express'
import { Employee } from './employeeModel'
import { IEmployee } from './IEmployee'
import { IUser } from '@config/interfaces/IUser'

import { signJWT } from '@lib/signJWT'
import { isPasswordMatch, createHash } from '@lib/bcryptPassword'
import { forceCast } from '@lib/forceCast'
import {
    responseBody,
    responseBodyError,
    responseBodyForbidden,
} from '@lib/response'
import { ObjectId } from 'bson'
import { IAdmin } from '@api/admin/IAdmin'

export class EmployeeController {
    public async index(req: Request, res: Response) {
        res.json(await Employee.find())
    }

    public async show(req: Request, res: Response) {
        if (!ObjectId.isValid(req.params._id)) {
            responseBodyError(res, 'Invalid Id')
        }
        const employee = await Employee.findById(req.params._id)
        if (employee) {
            responseBody(res, employee)
        } else {
            responseBodyError(res, 'Employee not found')
        }
    }

    public async authenticate(req: Request, res: Response) {
        const _auth = forceCast<IUser>(req.body)
        const employee = await Employee.findOne({
            username: _auth.username,
        })
        if (employee) {
            if (await isPasswordMatch(_auth.password, employee.password)) {
                const token = await signJWT(employee)
                responseBody(res, {
                    token,
                })
            } else {
                responseBodyError(res, 'Password is Wrong')
            }
        } else {
            responseBodyError(res, 'Username is not Found')
        }
    }

    public async store(req: Request, res: Response) {
        const user = req.user.data
        if (req.isAdmin || user.position === 1) {
            let _newEmployee = forceCast<IEmployee>(req.body)
            const _employee = await Employee.findOne({
                username: _newEmployee.username,
            })
            if (_employee) {
                responseBodyError(res, 'Username is already exist')
            }
            const _password = await createHash(_newEmployee.password)
            _newEmployee.password = _password
            const newEmployee = await Employee.create(_newEmployee)
            responseBody(res, newEmployee)
        } else {
            responseBodyForbidden(res)
        }
    }

    public async update(req: Request, res: Response) {
        const employee = forceCast<IEmployee>(req.user.data)
        const updatedEmployee = await Employee.findByIdAndUpdate(
            employee._id,
            { $set: req.body },
            { new: true }
        )
        if (updatedEmployee) {
            const token = await signJWT(updatedEmployee)
            responseBody(res, {
                employee: updatedEmployee,
                token,
            })
        } else {
            responseBodyError(res, 'User is not found')
        }
    }

    public async destroy(req: Request, res: Response) {
        if (!ObjectId.isValid(req.params._id)) {
            responseBodyError(res, 'Invalid Id')
        }
        if (req.isAdmin || req.user.data.position === 1) {
            const deletedEmployee = await Employee.findByIdAndDelete(
                req.params._id
            )
            responseBody(res, deletedEmployee)
        } else {
            responseBodyForbidden(res)
        }
    }
}
