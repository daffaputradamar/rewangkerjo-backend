"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SupportedByController_1 = require("./SupportedByController");
const verifyToken_1 = require("@lib/verifyToken");
const router = express_1.Router();
const controller = new SupportedByController_1.SupportedByController();
router.get("/", controller.index);
router.use(verifyToken_1.authenticateUser);
router.post("/", controller.store);
router.put("/:_id", controller.update);
router.delete("/:_id", controller.destroy);
exports.SupportedByRouter = router;
