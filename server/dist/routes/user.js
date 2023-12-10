"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Secret = process.env.Secret;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const edge_1 = require("@prisma/client/edge");
const prisma = new edge_1.PrismaClient();
router.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    try {
        const user = yield prisma.user.create({
            data: {
                username: username,
                email: email,
                password: password,
            }
        });
        if (typeof Secret === 'string') {
            const token = jsonwebtoken_1.default.sign({ email: req.body.email }, Secret);
            res.status(200).json({
                token: token,
                message: "successfully created the account",
                user: user
            });
        }
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield prisma.user.findUnique({
        where: {
            email: email,
            password: password
        }
    });
    if (user) {
        if (typeof Secret === 'string') {
            const token = jsonwebtoken_1.default.sign(email, Secret);
            res.json({ message: 'Logged in successfully', token });
        }
    }
    else {
        res.status(404).json('Please enter correct details');
    }
}));
exports.default = router;
