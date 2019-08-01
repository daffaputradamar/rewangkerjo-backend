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
var Kontak_1 = require("../models/Kontak");
var KontakController = /** @class */ (function () {
    function KontakController() {
    }
    KontakController.prototype.index = function (req, res) {
        Kontak_1.Kontak.find({}).then(function (data) { return res.json(data); });
    };
    KontakController.prototype.store = function (req, res) {
        Kontak_1.Kontak.create(__assign({}, req.body)).then(function (data) { return res.json(data); });
    };
    KontakController.prototype.destroy = function (req, res) {
        Kontak_1.Kontak.findOneAndDelete({ _id: req.params._id }).then(function (data) {
            return res.json(data);
        });
    };
    return KontakController;
}());
exports.KontakController = KontakController;
