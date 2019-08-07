import { sign } from "jsonwebtoken";
import { IAdmin } from "@api/admin/IAdmin";

export function signJWT(payload: IAdmin) {
    return new Promise(async (resolve, reject) => {
        const token = await sign({data: payload}, `${process.env.JWT_SECRET}`, { expiresIn: '1d' })
        resolve(token)
        reject(new Error("Error signing JWT"))
    })
}