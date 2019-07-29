"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UniversitasSchema = new mongoose_1.Schema({
    nama: {
        type: String,
    },
});
exports.Universitas = mongoose_1.model("Universitas", UniversitasSchema, "Universitas");
