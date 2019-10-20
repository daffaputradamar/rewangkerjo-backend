import { Request, Response } from 'express'
import { Admin } from './adminModel'
import { IAdmin } from './IAdmin'
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

export class AdminController {
    public async index(req: Request, res: Response) {
        res.json(await Admin.find())
    }

    public async show(req: Request, res: Response) {
        if (!ObjectId.isValid(req.params._id)) {
            responseBodyError(res, 'Invalid Id')
        }
        const admin = await Admin.findById(req.params._id)
        if (admin) {
            responseBody(res, admin)
        }
        responseBodyError(res, 'Admin not found')
    }

    public async authenticate(req: Request, res: Response) {
        const _auth = forceCast<IUser>(req.body)
        const admin = await Admin.findOne({
            username: _auth.username,
        })
        if (admin) {
            if (await isPasswordMatch(_auth.password, admin.password)) {
                const token = await signJWT(admin)
                responseBody(res, token)
            } else {
                responseBodyError(res, 'Password is Wrong')
            }
        } else {
            responseBodyError(res, 'Username is not Found')
        }
    }

    public async store(req: Request, res: Response) {
        let _newAdmin = forceCast<IAdmin>(req.body)
        const _admin = await Admin.findOne({
            username: _newAdmin.username,
        })
        if (_admin) {
            responseBodyError(res, 'Username is already exist')
        }
        const _password = await createHash(_newAdmin.password)
        _newAdmin.password = _password
        const newAdmin = await Admin.create(_newAdmin)
        responseBody(res, newAdmin)
    }

    public async destroy(req: Request, res: Response) {
        if (!ObjectId.isValid(req.params._id)) {
            responseBodyError(res, 'Invalid Id')
        }
        if (req.isAdmin) {
            const deletedAdmin = await Admin.findByIdAndDelete(req.params._id)
            responseBody(res, deletedAdmin)
        } else {
            responseBodyForbidden(res)
        }
    }
}
