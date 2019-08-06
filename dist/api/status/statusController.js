"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statusModel_1 = require("./statusModel");
class StatusController {
    index(req, res) {
        statusModel_1.Status.find({}).then((data) => res.json(data));
    }
    store(req, res) {
        statusModel_1.Status.create(Object.assign({}, req.body)).then((data) => res.json(data));
    }
    update(req, res) {
        statusModel_1.Status.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then((data) => res.json(data));
    }
    destroy(req, res) {
        statusModel_1.Status.findOneAndDelete({ _id: req.params._id }).then((data) => res.json(data));
    }
}
exports.StatusController = StatusController;
