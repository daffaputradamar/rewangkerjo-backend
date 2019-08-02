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
var MediaPartner_1 = require("../models/MediaPartner");
var MediaPartnerController = /** @class */ (function () {
    function MediaPartnerController() {
    }
    MediaPartnerController.prototype.index = function (req, res) {
        MediaPartner_1.MediaPartner.find({}).then(function (data) { return res.json(data); });
    };
    MediaPartnerController.prototype.store = function (req, res) {
        MediaPartner_1.MediaPartner.create(__assign({}, req.body)).then(function (data) { return res.json(data); });
    };
    MediaPartnerController.prototype.update = function (req, res) {
        MediaPartner_1.MediaPartner.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then(function (data) { return res.json(data); });
    };
    MediaPartnerController.prototype.destroy = function (req, res) {
        MediaPartner_1.MediaPartner.findOneAndDelete({ id: req.params._id }).then(function (data) {
            return res.json(data);
        });
    };
    return MediaPartnerController;
}());
exports.MediaPartnerController = MediaPartnerController;
