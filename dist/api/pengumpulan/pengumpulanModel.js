"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PengumpulanSchema = new mongoose_1.Schema({
    jenisPengumpulan: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "JenisPengumpulan"
    },
    file: {
        type: String,
    },
    tim: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Tim"
    }
});
exports.Pengumpulan = mongoose_1.model("Pengumpulan", PengumpulanSchema, "Pengumpulan");
