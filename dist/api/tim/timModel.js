"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TimSchema = new mongoose_1.Schema({
    nama: {
        type: String,
        unique: true
    },
    namaAplikasi: {
        type: String,
        unique: true
    },
    universitas: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Universitas"
    },
    ketua: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Peserta"
    },
    email: {
        type: String,
        unique: true
    },
    telp: {
        type: String
    },
    status: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Status"
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
});
exports.Tim = mongoose_1.model("Tim", TimSchema, "Tim");
