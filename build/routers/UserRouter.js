"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = require("../controllers/UserController");
var verifyToken_1 = require("../middlewares/verifyToken");
var router = express_1.Router();
var controller = new UserController_1.UserController();
router.get("/", controller.index);
router.get("/:_id", controller.show);
router.post("/", controller.store);
router.post("/login", controller.authenticate);
router.use(verifyToken_1.verifyToken);
router.put("/:_id", controller.update);
router.delete("/:_id", controller.destroy);
exports.UserRouter = router;
