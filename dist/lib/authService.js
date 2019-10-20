"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
function authenticateUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            req.user = yield verifyToken(bearerToken);
            req.isAdmin = false;
            next();
        }
        else {
            res.sendStatus(403);
        }
    });
}
exports.authenticateUser = authenticateUser;
function isAdmin(req, res, next) {
    if (req.user.data.name === undefined) {
        req.isAdmin = true;
        next();
    }
    else {
        next();
    }
}
exports.isAdmin = isAdmin;
function verifyToken(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = yield jsonwebtoken_1.verify(token, `${process.env.JWT_SECRET}`);
        return payload;
    });
}
