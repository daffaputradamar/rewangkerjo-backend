"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adminModel_1 = require("./adminModel");
const bcryptPassword_1 = require("@lib/bcryptPassword");
const signJWT_1 = require("@lib/signJWT");
class AdminController {
    index(req, res) {
        adminModel_1.Admin.find({}).then((data) => res.json(data));
    }
    show(req, res) {
        adminModel_1.Admin.findById(req.params._id).then((data) => res.json(data));
    }
    store(req, res) {
        let _admin = req.body;
        bcryptPassword_1.createHash(_admin.password)
            .then(hashedPassword => {
            _admin.password = hashedPassword;
            adminModel_1.Admin.create(Object.assign({}, _admin)).then((data) => res.json(data));
        });
    }
    authenticate(req, res) {
        const { username, password } = req.body;
        let user;
        adminModel_1.Admin.findOne({ username })
            .then(_user => {
            if (!_user) {
                res.json({
                    success: false,
                    error: "Username is not found"
                });
            }
            const __user = _user;
            user = __user;
            return bcryptPassword_1.isPasswordMatch(password, user.password);
        })
            .then(isMatch => {
            if (isMatch) {
                return signJWT_1.signJWT(user);
            }
            else {
                res.json({
                    success: false,
                    error: "Password does not match"
                });
            }
        })
            .then(token => {
            res.json({
                success: true,
                token
            });
        })
            .catch(err => {
            throw err;
        });
    }
    update(req, res) {
        adminModel_1.Admin.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then((data) => res.json(data));
    }
    destroy(req, res) {
        adminModel_1.Admin.findOneAndDelete({ _id: req.params._id }).then((data) => res.json(data));
    }
}
exports.AdminController = AdminController;
