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
var Hadiah_1 = require("../models/Hadiah");
var HadiahController = /** @class */ (function () {
    function HadiahController() {
    }
    HadiahController.prototype.index = function (req, res) {
        Hadiah_1.Hadiah.find({}).then(function (data) { return res.json(data); });
    };
    HadiahController.prototype.store = function (req, res) {
        Hadiah_1.Hadiah.create(__assign({}, req.body)).then(function (data) { return res.json(data); });
    };
    HadiahController.prototype.destroy = function (req, res) {
        Hadiah_1.Hadiah.findOneAndDelete({ _id: req.params._id }).then(function (data) {
            return res.json(data);
        });
    };
    return HadiahController;
}());
exports.HadiahController = HadiahController;
