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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_1 = __importDefault(require("./routes/user"));
const product_1 = __importDefault(require("./routes/product"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const DATABASE_URL = process.env.DATABASE_URL;
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (typeof DATABASE_URL === 'string')
                yield mongoose_1.default.connect(DATABASE_URL);
            else
                console.log("error with the url");
            console.log("connected to the mongoose");
        }
        catch (error) {
            console.log(error);
        }
    });
}
connect();
const app = (0, express_1.default)();
const port = 5000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use("/", user_1.default);
app.use("/admin", product_1.default);
app.listen(port, () => {
    console.log("Listening to the port");
});
