"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Universitas_1 = require("../models/Universitas");
var UniversitasController = /** @class */ (function () {
    function UniversitasController() {
    }
    UniversitasController.prototype.index = function (req, res) {
        Universitas_1.Universitas.find({}).then(function (data) { return res.json(data); });
    };
    return UniversitasController;
}());
exports.UniversitasController = UniversitasController;
