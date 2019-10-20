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
const adminModel_1 = require("./adminModel");
const signJWT_1 = require("@lib/signJWT");
const bcryptPassword_1 = require("@lib/bcryptPassword");
const forceCast_1 = require("@lib/forceCast");
const response_1 = require("@lib/response");
const bson_1 = require("bson");
class AdminController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield adminModel_1.Admin.find());
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!bson_1.ObjectId.isValid(req.params._id)) {
                response_1.responseBodyError(res, 'Invalid Id');
            }
            const admin = yield adminModel_1.Admin.findById(req.params._id);
            if (admin) {
                response_1.responseBody(res, admin);
            }
            response_1.responseBodyError(res, 'Admin not found');
        });
    }
    authenticate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _auth = forceCast_1.forceCast(req.body);
            const admin = yield adminModel_1.Admin.findOne({
                username: _auth.username,
            });
            if (admin) {
                if (yield bcryptPassword_1.isPasswordMatch(_auth.password, admin.password)) {
                    const token = yield signJWT_1.signJWT(admin);
                    response_1.responseBody(res, token);
                }
                else {
                    response_1.responseBodyError(res, 'Password is Wrong');
                }
            }
            else {
                response_1.responseBodyError(res, 'Username is not Found');
            }
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let _newAdmin = forceCast_1.forceCast(req.body);
            const _admin = yield adminModel_1.Admin.findOne({
                username: _newAdmin.username,
            });
            if (_admin) {
                response_1.responseBodyError(res, 'Username is already exist');
            }
            const _password = yield bcryptPassword_1.createHash(_newAdmin.password);
            _newAdmin.password = _password;
            const newAdmin = yield adminModel_1.Admin.create(_newAdmin);
            response_1.responseBody(res, newAdmin);
        });
    }
    destroy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!bson_1.ObjectId.isValid(req.params._id)) {
                response_1.responseBodyError(res, 'Invalid Id');
            }
            if (req.isAdmin) {
                const deletedAdmin = yield adminModel_1.Admin.findByIdAndDelete(req.params._id);
                response_1.responseBody(res, deletedAdmin);
            }
            else {
                response_1.responseBodyForbidden(res);
            }
        });
    }
}
exports.AdminController = AdminController;
