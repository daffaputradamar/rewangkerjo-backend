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
        User_1.User.find(__assign({}, req.body)).then(function (user) {
            jwt.sign({ user: user }, "" + process.env.JWT_SECRET, function (err, token) {
                if (err) {
                    throw err;
                }
                res.json({ token: token, user: user });
            });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
