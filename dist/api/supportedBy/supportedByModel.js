"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SupportedBySchema = new mongoose_1.Schema({
    nama: {
        type: String,
    },
    logo: {
        type: String,
    },
});
exports.SupportedBy = mongoose_1.model("SupportedBy", SupportedBySchema, "SupportedBy");
