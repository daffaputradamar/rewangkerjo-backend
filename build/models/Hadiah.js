"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var HadiahSchema = new mongoose_1.Schema({
    judul: {
        type: String,
    },
    nominal: {
        type: Number,
    },
});
exports.Hadiah = mongoose_1.model("Hadiah", HadiahSchema, "Hadiah");
