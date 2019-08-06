"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kontakModel_1 = require("./kontakModel");
class KontakController {
    index(req, res) {
        kontakModel_1.Kontak.find({}).then((data) => res.json(data));
    }
    store(req, res) {
        kontakModel_1.Kontak.create(Object.assign({}, req.body)).then((data) => res.json(data));
    }
    update(req, res) {
        kontakModel_1.Kontak.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then((data) => res.json(data));
    }
    destroy(req, res) {
        kontakModel_1.Kontak.findOneAndDelete({ _id: req.params._id }).then((data) => res.json(data));
    }
}
exports.KontakController = KontakController;
