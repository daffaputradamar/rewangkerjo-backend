"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//verify token
function verifyToken(req, res, next) {
    //Get auth header value
    var bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        //TOKEN FORMAT
        //Authorization: Bearer <access token>
        //split at the space
        var bearer = bearerHeader.split(" ");
        var bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else {
        //Forbidden
        res.sendStatus(403);
    }
}
exports.verifyToken = verifyToken;
