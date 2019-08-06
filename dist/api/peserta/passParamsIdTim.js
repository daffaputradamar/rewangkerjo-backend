"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function passParamsIdTim(req, res, next) {
    req.tim = req.params._idtim;
    next();
}
exports.passParamsIdTim = passParamsIdTim;
