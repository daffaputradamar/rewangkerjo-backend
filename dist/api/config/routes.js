"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
exports.default = router;
const employeeRouter_1 = require("@api/employee/employeeRouter");
const adminRouter_1 = require("@api/admin/adminRouter");
router.use('/admin', adminRouter_1.AdminRouter);
router.use('/employee', employeeRouter_1.EmployeeRouter);
