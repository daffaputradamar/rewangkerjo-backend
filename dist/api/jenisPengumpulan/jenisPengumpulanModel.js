"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const JenisPengumpulanSchema = new mongoose_1.Schema({
    nama: {
        type: String,
    },
    timeline: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Timeline"
    },
    status: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Status"
    },
});
exports.JenisPengumpulan = mongoose_1.model("JenisPengumpulan", JenisPengumpulanSchema, "JenisPengumpulan");
