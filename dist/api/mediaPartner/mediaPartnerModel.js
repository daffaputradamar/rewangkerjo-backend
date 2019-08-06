"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MediaPartnerSchema = new mongoose_1.Schema({
    nama: {
        type: String,
    },
    logo: {
        type: String,
    },
});
exports.MediaPartner = mongoose_1.model("MediaPartner", MediaPartnerSchema, "MediaPartner");
