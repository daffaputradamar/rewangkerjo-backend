"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jenisPengumpulanController_1 = require("./jenisPengumpulanController");
const authService_1 = require("@lib/authService");
const router = express_1.Router();
const controller = new jenisPengumpulanController_1.JenisPengumpulanController();
router.get("/", controller.index);
router.use(authService_1.authenticateUser);
router.post("/", controller.store);
router.put("/:_id", controller.update);
router.delete("/:_id", controller.destroy);
exports.JenisPengumpulanRouter = router;
