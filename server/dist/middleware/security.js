"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.Secret;
const authent = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        console.log("No token found");
        res.status(403).json("cannot find the token error");
        return;
    }
    if (typeof JWT_SECRET === 'string') {
        try {
            const data = jsonwebtoken_1.default.verify(token, JWT_SECRET);
            if (typeof data === 'object') {
                req.headers["userid"] = data.email;
                next();
            }
            else {
                console.log("Invalid token");
                res.status(403).json("invalid token");
            }
        }
        catch (error) {
            console.error("Error", error);
            res.status(500).json("internal error");
        }
    }
};
exports.default = authent;
