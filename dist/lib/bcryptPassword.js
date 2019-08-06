"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function createHash(password) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hash = yield bcryptjs_1.default.hash(password, salt);
        resolve(hash);
        reject(new Error("Error creating Hash"));
    }));
}
exports.createHash = createHash;
function isPasswordMatch(password, hashedPassword) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        let isMatch = yield bcryptjs_1.default.compare(password, hashedPassword);
        resolve(isMatch);
        reject(new Error("Error mathcing password"));
    }));
}
exports.isPasswordMatch = isPasswordMatch;