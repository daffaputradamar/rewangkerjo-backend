"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Universitas } from "../models/Universitas"
var axios_1 = __importDefault(require("axios"));
var UniversitasController = /** @class */ (function () {
    function UniversitasController() {
    }
    UniversitasController.prototype.index = function (req, res) {
        // Universitas.find({}).then((data) => res.json(data))
        axios_1.default.get("https://listuniv.herokuapp.com/").then(function (response) {
            var num = 1;
            var namaUniv = response.data.map(function (data) { return ({
                _id: num++,
                nama: data.name,
            }); });
            res.json(namaUniv);
        });
    };
    return UniversitasController;
}());
exports.UniversitasController = UniversitasController;
