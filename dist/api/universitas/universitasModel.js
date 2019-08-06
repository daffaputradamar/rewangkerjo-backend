"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UniversitasSchema = new mongoose_1.Schema({
    nama: {
        type: String,
    },
});
exports.Universitas = mongoose_1.model("Universitas", UniversitasSchema, "Universitas");
