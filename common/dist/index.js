"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const signup = zod_1.default.object({
    Name: zod_1.default.string(),
    email_id: zod_1.default.string().email(),
    Password: zod_1.default.number().min(6)
});
const signin = zod_1.default.object({
    username: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
const createBlogInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string()
});
const updateBlogInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    id: zod_1.default.number()
});
