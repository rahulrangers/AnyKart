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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Secret = process.env.Secret;
const user_1 = __importDefault(require("../db/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const security_1 = __importDefault(require("../middleware/security"));
router.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, image } = req.body;
    console.log(username);
    try {
        const user = yield user_1.default.create({
            username: username,
            email: email,
            password: password,
            image: image
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
    const user = yield user_1.default.findOne({ email: email });
    if (user) {
        if (user.password != undefined)
            if (user.password == password) {
                if (typeof Secret === 'string') {
                    const token = jsonwebtoken_1.default.sign({ email }, Secret);
                    res.json({ message: 'Logged in successfully', token, email: user.email, image: user.image, name: user.username });
                }
            }
            else {
                res.status(400).json({ msg: "please enter correct password" });
            }
    }
    else {
        res.status(400).json({ msg: "user doesn't exist" });
    }
}));
router.get("/getuser", security_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.headers["userid"];
    console.log(email);
    const user = yield user_1.default.findOne({ email: email });
    if (user) {
        console.log(user);
        res.json({ email: user.email, name: user.username, image: user.image });
    }
    else {
        res.status(400).json({ msg: "user doesn't exist" });
    }
}));
exports.default = router;
