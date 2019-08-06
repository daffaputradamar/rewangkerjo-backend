"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const pesertaController_1 = require("./pesertaController");
const authService_1 = require("@lib/authService");
const storageKtm = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/ktm/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const storageFoto = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/foto/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const uploadKtm = multer_1.default({ storage: storageKtm });
const uploadFoto = multer_1.default({ storage: storageFoto });
const router = express_1.Router();
const controller = new pesertaController_1.PesertaController();
router.use(authService_1.authenticateUser);
router.put("/:_id/ktm", uploadKtm.single("ktm"), controller.updateKtm);
router.put("/:_id/foto", uploadFoto.single("foto"), controller.updateFoto);
exports.PesertaRouter = router;
