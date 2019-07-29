"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var TimSchema = new mongoose_1.Schema({
    nama: {
        type: String,
    },
    universitas: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Universitas",
    },
    statusTim: {
        tahapPertama: {
            type: Boolean,
        },
        tahapKedua: {
            type: Boolean,
        },
    },
    ketua: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Peserta",
    },
    peserta: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Peserta",
        },
    ],
    namaAplikasi: {
        type: String,
    },
    fileProposal: {
        type: String,
    },
    filePresentasiVideo: {
        type: String,
    },
    fileDemo: {
        type: String,
    },
    fileAplikasi: {
        type: String,
    },
});
exports.Tim = mongoose_1.model("Tim", TimSchema, "Tim");
