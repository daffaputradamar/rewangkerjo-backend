import { sign } from 'jsonwebtoken'
import { IEmployee } from '@api/employee/IEmployee'
import { IAdmin } from '@api/admin/IAdmin'

export function signJWT(payload: IEmployee | IAdmin) {
    return new Promise(async (resolve, reject) => {
        const token = await sign({ data: payload }, `${process.env.JWT_SECRET}`)
        resolve(token)
        reject(new Error('Error signing JWT'))
    })
}
