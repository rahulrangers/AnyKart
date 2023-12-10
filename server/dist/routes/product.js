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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Secret = process.env.Secret;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
router.post("/addproduct", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { price, stock, image, name, description, category } = req.body;
    const product = yield prisma.product.create({
        data: {
            name: name,
            description: description,
            Image: image,
            price: price,
            category: category,
            stock: stock
        }
    });
    res.status(200).json({
        message: "successfully added product",
        product: product,
    });
}));
router.get("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield prisma.product.findMany();
        res.status(200).json(products);
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ error });
    }
}));
router.get("/product/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Productid = parseInt(req.params.id);
    const product = yield prisma.product.findUnique({
        where:{
            Productid,
        }
    })
    if(product){
    res.status(200).json(product);
    }
    else{
        res.json({"msg": "no product is found for te given id"})
    }
}))
exports.default = router;