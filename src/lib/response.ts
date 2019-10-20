import { Response } from 'express'

export function responseBody(res: Response, data: any) {
    return res.json({
        success: true,
        data,
    })
}

export function responseBodyError(res: Response, message: string) {
    return res.json({
        success: false,
        message,
    })
}

export function responseBodyForbidden(res: Response) {
    return res.sendStatus(403)
}
