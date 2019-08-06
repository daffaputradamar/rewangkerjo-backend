"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hadiahModel_1 = require("./hadiahModel");
class HadiahController {
    index(req, res) {
        hadiahModel_1.Hadiah.find({}).then((data) => res.json(data));
    }
    store(req, res) {
        hadiahModel_1.Hadiah.create(Object.assign({}, req.body)).then((data) => res.json(data));
    }
    update(req, res) {
        hadiahModel_1.Hadiah.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then((data) => res.json(data));
    }
    destroy(req, res) {
        hadiahModel_1.Hadiah.findOneAndDelete({ _id: req.params._id }).then((data) => res.json(data));
    }
}
exports.HadiahController = HadiahController;
