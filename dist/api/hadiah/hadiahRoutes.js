"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hadiahController_1 = require("./hadiahController");
const authService_1 = require("@lib/authService");
const router = express_1.Router();
const controller = new hadiahController_1.HadiahController();
router.get("/", controller.index);
router.use(authService_1.authenticateUser);
router.post("/", controller.store);
router.put("/:_id", controller.update);
router.delete("/:_id", controller.destroy);
exports.HadiahRouter = router;