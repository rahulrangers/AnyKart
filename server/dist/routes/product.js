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
const product_1 = __importDefault(require("../db/product"));
const mongoose_1 = __importDefault(require("mongoose"));
router.post("/addproduct", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { price, stock, image, name, description, category } = req.body;
    const product = yield product_1.default.create({
        name: name,
        description: description,
        Image: image,
        price: price,
        category: category,
        stock: stock
    });
    res.status(200).json({
        message: "successfully added product",
        product: product,
    });
}));
router.get("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.find({});
        res.status(200).json(products);
    }
    catch (error) {
        res.status(400).json({ error });
    }
}));
router.get("/product/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = new mongoose_1.default.Types.ObjectId(req.params.id);
    const product = yield product_1.default.findById(_id);
    if (product) {
        res.status(200).json(product);
    }
    else {
        res.status(400).json({ msg: "some error with id of product" });
    }
}));
router.get("/products/:category", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = req.params.category;
    const product = yield product_1.default.find({ category });
    if (product) {
        res.status(200).json(product);
    }
    else {
        res.status(400).json({ msg: "some error with catgeory of product" });
    }
}));
exports.default = router;
