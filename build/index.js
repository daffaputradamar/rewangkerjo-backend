"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("dotenv").config();
require("./config/db");
var SampleRouter_1 = require("./routers/SampleRouter");
var SupportedByRouter_1 = require("./routers/SupportedByRouter");
var KontakRouter_1 = require("./routers/KontakRouter");
var PesertaRouter_1 = require("./routers/PesertaRouter");
var MediaPartnerRouter_1 = require("./routers/MediaPartnerRouter");
var UserRouter_1 = require("./routers/UserRouter");
var TimelineRouter_1 = require("./routers/TimelineRouter");
var HadiahRouter_1 = require("./routers/HadiahRouter");
var UniversitasRouter_1 = require("./routers/UniversitasRouter");
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use("/uploads/ktm", express_1.default.static("uploads/ktm"));
app.use("/uploads/foto", express_1.default.static("uploads/foto"));
app.use("/sample", SampleRouter_1.SampleRouter);
app.use("/supportedBy", SupportedByRouter_1.SupportedByRouter);
app.use("/kontak", KontakRouter_1.KontakRouter);
app.use("/peserta", PesertaRouter_1.PesertaRouter);
app.use("/mediaPartner", MediaPartnerRouter_1.MediaPartnerRouter);
app.use("/timeline", TimelineRouter_1.TimelineRouter);
app.use("/users", UserRouter_1.UserRouter);
app.use("/hadiah", HadiahRouter_1.HadiahRouter);
app.use("/universitas", UniversitasRouter_1.UniversitasRouter);
app.listen(process.env.PORT || 3000, function () { return console.log("service listening"); });