import { Request, Response, NextFunction } from "express";

export function passParamsIdTim(req: Request, res: Response, next: NextFunction) {
    req.tim = req.params._idtim
    next()   
}