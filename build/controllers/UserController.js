"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../models/User");
var jsonwebtoken_1 = require("jsonwebtoken");
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
        User_1.User.create(req.body.user).then(function (data) { return res.json(data); });
    };
    UserController.prototype.update = function (req, res) {
        User_1.User.findOneAndUpdate({ _id: req.params._id }, { $set: req.body.user }, { new: true }).then(function (data) { return res.json(data); });
    };
    UserController.prototype.destroy = function (req, res) {
        User_1.User.findOneAndDelete({ _id: req.params._id }).then(function (data) { return res.json(data); });
    };
    UserController.prototype.authenticate = function (req, res) {
        User_1.User.find(__assign({}, req.body.user)).then(function (user) {
            jsonwebtoken_1.sign({ user: user }, "" + process.env.JWT_SECRET);
        })
            .then(function (token) { return res.json({ token: token }); });
    };
    return UserController;
}());
exports.UserController = UserController;
