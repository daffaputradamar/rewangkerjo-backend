"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pengumpulanModel_1 = require("./pengumpulanModel");
class PengumpulanController {
    index(req, res) {
        pengumpulanModel_1.Pengumpulan
            .find({
            tim: req.params._idtim
        })
            .populate("jenisPengumpulan")
            .populate("tim")
            .exec()
            .then((data) => res.json(data));
    }
    show(req, res) {
        pengumpulanModel_1.Pengumpulan
            .findById(req.params._id)
            .populate("jenisPengumpulan")
            .populate("tim")
            .exec()
            .then((data) => res.json(data));
    }
    store(req, res) {
        pengumpulanModel_1.Pengumpulan.create(Object.assign({}, req.body)).then((data) => res.json(data));
    }
    update(req, res) {
        pengumpulanModel_1.Pengumpulan.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then((data) => res.json(data));
    }
    destroy(req, res) {
        pengumpulanModel_1.Pengumpulan.findOneAndDelete({ _id: req.params._id }).then((data) => res.json(data));
    }
}
exports.PengumpulanController = PengumpulanController;
