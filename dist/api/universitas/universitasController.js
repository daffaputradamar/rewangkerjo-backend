"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const universitasModel_1 = require("./universitasModel");
class UniversitasController {
    index(req, res) {
        universitasModel_1.Universitas.find({}).then((data) => res.json(data));
    }
    store(req, res) {
        universitasModel_1.Universitas.create(Object.assign({}, req.body)).then((data) => res.json(data));
    }
    update(req, res) {
        universitasModel_1.Universitas.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then((data) => res.json(data));
    }
    destroy(req, res) {
        universitasModel_1.Universitas.findOneAndDelete({ _id: req.params._id }).then((data) => res.json(data));
    }
}
exports.UniversitasController = UniversitasController;
