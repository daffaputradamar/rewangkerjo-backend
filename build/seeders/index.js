"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("../config/db");
// function to do seeding
function seed(model, data) {
    model.collection.deleteMany({});
    model.create(data);
}
// seeding supportedBy
var SupportedBy_1 = require("../models/SupportedBy");
var supportedBy_1 = __importDefault(require("./supportedBy"));
seed(SupportedBy_1.SupportedBy, supportedBy_1.default);
// seeding timeline
var Timeline_1 = require("../models/Timeline");
var timeline_1 = __importDefault(require("./timeline"));
seed(Timeline_1.Timeline, timeline_1.default);
// seeding mediaPartner
var MediaPartner_1 = require("../models/MediaPartner");
var mediaPartner_1 = __importDefault(require("./mediaPartner"));
seed(MediaPartner_1.MediaPartner, mediaPartner_1.default);
// seeding Universitas
var Universitas_1 = require("../models/Universitas");
var universitas_1 = __importDefault(require("./universitas"));
seed(Universitas_1.Universitas, universitas_1.default);
// seeding User
var User_1 = require("../models/User");
var user_1 = __importDefault(require("./user"));
seed(User_1.User, user_1.default);
// seeding Hadiah
var Hadiah_1 = require("../models/Hadiah");
var hadiah_1 = __importDefault(require("./hadiah"));
seed(Hadiah_1.Hadiah, hadiah_1.default);
// seeding Tim
var Tim_1 = require("../models/Tim");
var tim_1 = __importDefault(require("./tim"));
seed(Tim_1.Tim, tim_1.default);
// seeding Kontak
var Kontak_1 = require("../models/Kontak");
var kontak_1 = __importDefault(require("./kontak"));
seed(Kontak_1.Kontak, kontak_1.default);
// seeding Peserta
var Peserta_1 = require("../models/Peserta");
var peserta_1 = __importDefault(require("./peserta"));
seed(Peserta_1.Peserta, peserta_1.default);
