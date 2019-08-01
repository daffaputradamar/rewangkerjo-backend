"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = __importStar(require("jsonwebtoken"));
var User_1 = require("../models/User");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.index = function (req, res) {
        User_1.User.find({}).then(function (data) { return res.json(data); });
    };
    UserController.prototype.show = function (req, res) {
        User_1.User.findById(req.params._id).then(function (data) { return res.json(data); });
    };
    UserController.prototype.store = function (req, res) {
        User_1.User.create(req.body).then(function (data) { return res.json(data); });
    };
    UserController.prototype.update = function (req, res) {
        User_1.User.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then(function (data) { return res.json(data); });
    };
    UserController.prototype.destroy = function (req, res) {
        User_1.User.findOneAndDelete({ _id: req.params._id }).then(function (data) { return res.json(data); });
    };
    UserController.prototype.authenticate = function (req, res) {
        User_1.User.findOne({
            username: req.body.username,
            password: req.body.password,
        })
            .then(function (row) {
            if (req.body.username === row.username &&
                req.body.password === row.password) {
                var user_1 = {
                    _id: row._id,
                    email: row.email,
                    username: row.username,
                    isAdmin: row.isAdmin,
                };
                jwt.sign({ user: user_1 }, "" + process.env.JWT_SECRET, function (err, token) {
                    res.json({ token: token, user: user_1 });
                });
            }
        })
            .catch(function (err) {
            res.json({
                status: "error",
                message: "Akun tidak ditemukan",
            });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
