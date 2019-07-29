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
var Timeline_1 = require("../models/Timeline");
var TimelineController = /** @class */ (function () {
    function TimelineController() {
    }
    TimelineController.prototype.index = function (req, res) {
        Timeline_1.Timeline.find({}).then(function (data) { return res.json(data); });
    };
    TimelineController.prototype.store = function (req, res) {
        Timeline_1.Timeline.create(__assign({}, req.body.timeline)).then(function (data) { return res.json(data); });
    };
    TimelineController.prototype.destroy = function (req, res) {
        Timeline_1.Timeline.findOneAndDelete({ _id: req.params._id }).then(function (data) {
            return res.json(data);
        });
    };
    TimelineController.prototype.update = function (req, res) {
        Timeline_1.Timeline.findOneAndUpdate({ _id: req.params._id }, { $set: req.body.timeline }, { new: true }).then(function (data) { return res.json(data); });
    };
    return TimelineController;
}());
exports.TimelineController = TimelineController;
