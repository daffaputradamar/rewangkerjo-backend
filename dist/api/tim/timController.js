"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timModel_1 = require("./timModel");
const bcryptPassword_1 = require("@lib/bcryptPassword");
const signJWT_1 = require("@lib/signJWT");
class TimController {
    index(req, res) {
        timModel_1.Tim
            .find({})
            .populate("universitas")
            .populate("ketua")
            .populate("status")
            .exec()
            .then((data) => res.json(data));
    }
    show(req, res) {
        timModel_1.Tim
            .findById(req.params._id)
            .populate("universitas")
            .populate("ketua")
            .populate("status")
            .exec()
            .then((data) => res.json(data));
    }
    store(req, res) {
        let _tim = req.body;
        bcryptPassword_1.createHash(_tim.password)
            .then(hashedPassword => {
            _tim.password = hashedPassword;
            timModel_1.Tim.create(Object.assign({}, _tim)).then((data) => res.json(data));
        });
    }
    authenticate(req, res) {
        const { username, password } = req.body;
        let user;
        timModel_1.Tim.findOne({ username })
            .populate("ketua")
            .populate("status")
            .populate("universitas")
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
        timModel_1.Tim.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then((data) => res.json(data));
    }
    destroy(req, res) {
        timModel_1.Tim.findOneAndDelete({ _id: req.params._id }).then((data) => res.json(data));
    }
}
exports.TimController = TimController;
