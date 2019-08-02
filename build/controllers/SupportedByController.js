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
var SupportedBy_1 = require("../models/SupportedBy");
var SupportedByController = /** @class */ (function () {
    function SupportedByController() {
    }
    SupportedByController.prototype.index = function (req, res) {
        SupportedBy_1.SupportedBy.find({}).then(function (data) { return res.json(data); });
    };
    SupportedByController.prototype.store = function (req, res) {
        SupportedBy_1.SupportedBy.create(__assign({}, req.body)).then(function (data) { return res.json(data); });
    };
    SupportedByController.prototype.update = function (req, res) {
        SupportedBy_1.SupportedBy.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then(function (data) { return res.json(data); });
    };
    SupportedByController.prototype.destroy = function (req, res) {
        SupportedBy_1.SupportedBy.findOneAndDelete({ _id: req.params._id }).then(function (data) {
            return res.json(data);
        });
    };
    return SupportedByController;
}());
exports.SupportedByController = SupportedByController;
