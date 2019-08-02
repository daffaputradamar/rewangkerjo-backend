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
var Universitas_1 = require("../models/Universitas");
var UniversitasController = /** @class */ (function () {
    function UniversitasController() {
    }
    UniversitasController.prototype.index = function (req, res) {
        Universitas_1.Universitas.find({}).then(function (data) { return res.json(data); });
    };
    UniversitasController.prototype.store = function (req, res) {
        Universitas_1.Universitas.create(__assign({}, req.body)).then(function (data) { return res.json(data); });
    };
    UniversitasController.prototype.update = function (req, res) {
        Universitas_1.Universitas.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then(function (data) { return res.json(data); });
    };
    UniversitasController.prototype.destroy = function (req, res) {
        Universitas_1.Universitas.findOneAndDelete({ _id: req.params._id }).then(function (data) {
            return res.json(data);
        });
    };
    return UniversitasController;
}());
exports.UniversitasController = UniversitasController;
