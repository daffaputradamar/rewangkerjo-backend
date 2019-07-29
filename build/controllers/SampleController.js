"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sample_1 = require("../models/Sample");
var jsonwebtoken_1 = require("jsonwebtoken");
var SampleController = /** @class */ (function () {
    function SampleController() {
    }
    SampleController.prototype.index = function (req, res) {
        Sample_1.Sample.find().then(function (data) { return res.json(data); });
    };
    SampleController.prototype.show = function (req, res) {
        Sample_1.Sample.findById(req.params._id).then(function (data) { return res.json(data); });
    };
    SampleController.prototype.store = function (req, res) {
        Sample_1.Sample.create(req.body.sample).then(function (data) { return res.json(data); });
    };
    SampleController.prototype.mysample = function (req, res) {
        jsonwebtoken_1.verify("" + req.token, "" + process.env.JWT_SECRET, function (err, payload) {
            if (err)
                res.sendStatus(403);
            res.json({
                message: "Sample can be seen",
                payload: payload
            });
        });
    };
    SampleController.prototype.update = function (req, res) {
        Sample_1.Sample.findOneAndUpdate({ _id: req.params._id }, { $set: req.body.sample }, { new: true }).then(function (data) { return res.json(data); });
    };
    SampleController.prototype.destroy = function (req, res) {
        Sample_1.Sample.findOneAndDelete({ _id: req.params._id }).then(function (data) {
            return res.json(data);
        });
    };
    return SampleController;
}());
exports.SampleController = SampleController;
