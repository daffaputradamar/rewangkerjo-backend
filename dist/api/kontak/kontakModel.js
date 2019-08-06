"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const KontakSchema = new mongoose_1.Schema({
    nama: {
        type: String,
    },
    telp: {
        type: String,
    },
});
exports.Kontak = mongoose_1.model("Kontak", KontakSchema, "Kontak");
