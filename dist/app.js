"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const dotenv_1 = require("dotenv");
dotenv_1.config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("@config/routes"));
require("@config/db");
const app = express_1.default();
app.use(morgan_1.default('tiny'));
app.use(cors_1.default());
app.use(express_1.default.json());
app.get('/favicon.ico', (req, res) => res.status(204));
app.get('/', (req, res) => {
    res.send("Hello");
});
app.use("/ktm", express_1.default.static("public/ktm"));
app.use("/foto", express_1.default.static("public/foto"));
app.use(routes_1.default);
app.listen(5000, () => console.log("Server Running"));
