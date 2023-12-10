"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_1 = __importDefault(require("./routes/user"));
const product_1 = __importDefault(require("./routes/product"));
const app = (0, express_1.default)();
const port = 5000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use("/", user_1.default);
app.use("/admin", product_1.default);
app.listen(port, () => {
    console.log("Listening to the port");
});
