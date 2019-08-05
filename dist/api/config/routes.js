"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
exports.default = router;
const supportedByRoutes_1 = require("@api/supportedBy/supportedByRoutes");
router.use('/', supportedByRoutes_1.SupportedByRouter);
