import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export async function authenticateUser(req: Request, res: Response, next: NextFunction) {
  const bearerHeader = req.headers["authorization"];
  
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.user = await verifyToken(bearerToken);
      next();
    } else {
      res.sendStatus(403);
    }
}

function verifyToken(token: string) {
  return new Promise(async (resolve, reject) => {
    const payload = await verify(token, `${process.env.JWT_SECRET}`)
    resolve(payload)
    reject(new Error("Error verifying token"))
  })
}