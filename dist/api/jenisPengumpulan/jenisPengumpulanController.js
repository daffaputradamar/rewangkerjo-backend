"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jenisPengumpulanModel_1 = require("./jenisPengumpulanModel");
class JenisPengumpulanController {
    index(req, res) {
        jenisPengumpulanModel_1.JenisPengumpulan
            .find({})
            .populate("timeline")
            .populate("status")
            .exec()
            .then((data) => res.json(data));
    }
    store(req, res) {
        jenisPengumpulanModel_1.JenisPengumpulan.create(Object.assign({}, req.body)).then((data) => res.json(data));
    }
    update(req, res) {
        jenisPengumpulanModel_1.JenisPengumpulan.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then((data) => res.json(data));
    }
    destroy(req, res) {
        jenisPengumpulanModel_1.JenisPengumpulan.findOneAndDelete({ _id: req.params._id }).then((data) => res.json(data));
    }
}
exports.JenisPengumpulanController = JenisPengumpulanController;
