"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
require("module-alias/register");
dotenv_1.config();
const routes_1 = __importDefault(require("@config/routes"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
require("@config/db");
const app = express_1.default();
app.use(morgan_1.default('tiny'));
app.use(cors_1.default());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello');
});
app.use(routes_1.default);
app.listen(process.env.PORT || 5000, () => console.log('Server Running'));
