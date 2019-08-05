"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supportedByModel_1 = require("./supportedByModel");
class SupportedByController {
    index(req, res) {
        supportedByModel_1.SupportedBy.find({}).then((data) => res.json(data));
    }
    store(req, res) {
        supportedByModel_1.SupportedBy.create(Object.assign({}, req.body)).then((data) => res.json(data));
    }
    update(req, res) {
        supportedByModel_1.SupportedBy.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then((data) => res.json(data));
    }
    destroy(req, res) {
        supportedByModel_1.SupportedBy.findOneAndDelete({ _id: req.params._id }).then((data) => res.json(data));
    }
}
exports.SupportedByController = SupportedByController;
