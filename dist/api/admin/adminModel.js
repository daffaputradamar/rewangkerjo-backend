"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AdminSchema = new mongoose_1.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
});
exports.Admin = mongoose_1.model("Admin", AdminSchema, "Admin");
