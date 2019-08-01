"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tim_1 = require("../models/Tim");
var TimController = /** @class */ (function () {
    function TimController() {
    }
    TimController.prototype.index = function (req, res) {
        Tim_1.Tim.find().then(function (data) { return res.json(data); });
    };
    TimController.prototype.show = function (req, res) {
        Tim_1.Tim.findById(req.params._id).then(function (data) { return res.json(data); });
    };
    TimController.prototype.store = function (req, res) {
        Tim_1.Tim.create(req.body).then(function (data) { return res.json(data); });
    };
    TimController.prototype.update = function (req, res) {
        Tim_1.Tim.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then(function (data) { return res.json(data); });
    };
    TimController.prototype.destroy = function (req, res) {
        Tim_1.Tim.findOneAndDelete({ _id: req.params._id }).then(function (data) { return res.json(data); });
    };
    return TimController;
}());
exports.TimController = TimController;
