"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var SampleSchema = new mongoose_1.Schema({
    sampleField: {
        type: String,
    },
});
exports.Sample = mongoose_1.model("Sample", SampleSchema, "Sample");
