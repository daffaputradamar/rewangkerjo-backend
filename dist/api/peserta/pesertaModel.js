"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PesertaSchema = new mongoose_1.Schema({
    nama: {
        type: String,
    },
    nim: {
        type: String,
    },
    ktm: {
        type: String,
    },
    foto: {
        type: String,
    },
    tim: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Tim",
    },
});
exports.Peserta = mongoose_1.model("Peserta", PesertaSchema, "Peserta");
