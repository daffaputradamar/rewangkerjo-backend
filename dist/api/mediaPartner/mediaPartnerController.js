"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mediaPartnerModel_1 = require("./mediaPartnerModel");
class MediaPartnerController {
    index(req, res) {
        mediaPartnerModel_1.MediaPartner.find({}).then((data) => res.json(data));
    }
    store(req, res) {
        mediaPartnerModel_1.MediaPartner.create(Object.assign({}, req.body)).then((data) => res.json(data));
    }
    update(req, res) {
        mediaPartnerModel_1.MediaPartner.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then((data) => res.json(data));
    }
    destroy(req, res) {
        mediaPartnerModel_1.MediaPartner.findOneAndDelete({ _id: req.params._id }).then((data) => res.json(data));
    }
}
exports.MediaPartnerController = MediaPartnerController;
