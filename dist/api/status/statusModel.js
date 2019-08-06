"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const StatusSchema = new mongoose_1.Schema({
    nama: {
        type: String,
        unique: true
    }
});
exports.Status = mongoose_1.model("Status", StatusSchema, "Status");
