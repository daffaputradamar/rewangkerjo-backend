"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statusController_1 = require("./statusController");
const authService_1 = require("@lib/authService");
const router = express_1.Router();
const controller = new statusController_1.StatusController();
router.get("/", controller.index);
router.use(authService_1.authenticateUser);
router.post("/", controller.store);
router.put("/:_id", controller.update);
router.delete("/:_id", controller.destroy);
exports.StatusRouter = router;