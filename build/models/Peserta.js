"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PesertaSchema = new mongoose_1.Schema({
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
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
});
exports.Peserta = mongoose_1.model("Peserta", PesertaSchema, "Peserta");
