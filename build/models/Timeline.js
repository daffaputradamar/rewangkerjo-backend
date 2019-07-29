"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var TimelineSchema = new mongoose_1.Schema({
    nama: {
        type: String,
    },
    tgl_mulai: {
        type: Date,
    },
    tgl_selesai: {
        type: Date,
    },
    deskripsi: {
        type: String,
    },
});
exports.Timeline = mongoose_1.model("Timeline", TimelineSchema, "Timeline");
