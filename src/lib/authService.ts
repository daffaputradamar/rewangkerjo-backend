import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

export async function authenticateUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const bearerHeader = req.headers['authorization']

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.user = await verifyToken(bearerToken)
        req.isAdmin = false
        next()
    } else {
        res.sendStatus(403)
    }
}

export function isAdmin(req: Request, res: Response, next: NextFunction) {
    if (req.user.data.name === undefined) {
        req.isAdmin = true
        next()
    } else {
        next()
    }
}

export function mustAdmin(req: Request, res: Response, next: NextFunction) {
    if (req.isAdmin) {
        next()
    } else {
        res.sendStatus(403)
    }
}

async function verifyToken(token: string) {
    const payload = await verify(token, `${process.env.JWT_SECRET}`)
    return payload
}
