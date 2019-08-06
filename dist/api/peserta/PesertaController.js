"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const pesertaModel_1 = require("./pesertaModel");
class PesertaController {
    index(req, res) {
        pesertaModel_1.Peserta
            .find({
            tim: req.params._idtim
        })
            .then((data) => res.json(data));
    }
    show(req, res) {
        pesertaModel_1.Peserta.findById(req.params._id).then((data) => res.json(data));
    }
    store(req, res) {
        pesertaModel_1.Peserta.create(req.body).then((data) => res.json(data));
    }
    update(req, res) {
        pesertaModel_1.Peserta.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then((data) => res.json(data));
    }
    updateKtm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const peserta = yield pesertaModel_1.Peserta.findById(req.params._id);
            if (peserta.ktm) {
                fs_1.default.unlinkSync(`public/ktm/${peserta.ktm}`);
            }
            pesertaModel_1.Peserta.findOneAndUpdate({ _id: req.params._id }, { $set: { ktm: req.file.filename } }, { new: true }).then((data) => res.json(data));
        });
    }
    updateFoto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const peserta = yield pesertaModel_1.Peserta.findById(req.params._id);
            if (peserta.foto) {
                fs_1.default.unlinkSync(`public/foto/${peserta.foto}`);
            }
            pesertaModel_1.Peserta.findOneAndUpdate({ _id: req.params._id }, { $set: { foto: req.file.filename } }, { new: true }).then((data) => res.json(data));
        });
    }
    destroy(req, res) {
        pesertaModel_1.Peserta.findOneAndDelete({ _id: req.params._id }).then((data) => res.json(data));
    }
}
exports.PesertaController = PesertaController;
