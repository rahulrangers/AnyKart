"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.Secret;
const verify = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(403).json("cannot find the token error");
    }
    else {
        if (typeof JWT_SECRET === 'string') {
            const data = jsonwebtoken_1.default.verify(token, JWT_SECRET);
            if (typeof data === 'string')
                req.headers["userid"] = data;
            next();
        }
    }
};
exports.default = verify;
