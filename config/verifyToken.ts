import { Request, Response, NextFunction } from "express";
//verify token
export function verifyToken(req: Request, res: Response, next: NextFunction) {
    //Get auth header value
    const bearerHeader = req.headers["authorization"];
  
    if (typeof bearerHeader !== "undefined") {
      //TOKEN FORMAT
      //Authorization: Bearer <access token>
      //split at the space
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
  
      next();
    } else {
      //Forbidden
      res.sendStatus(403);
    }
  }