"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UniversitasController_1 = require("../controllers/UniversitasController");
var router = express_1.Router();
var controller = new UniversitasController_1.UniversitasController();
router.get("/", controller.index);
exports.UniversitasRouter = router;
