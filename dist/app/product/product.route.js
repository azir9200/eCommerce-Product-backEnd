"use strict";
// import express, { Request, Response } from "express"
// import { Product } from "./product.model";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
// const router = express.Router();
// router.post("/", async(req: Request, res: Response)  =>{
//  const result = await Product.create(req.body);
//     res.json({
//         success: true,
//         message: "Product is created successfully !",
//         data: result,
//     })
//   console.log(req.body);
// });
// export const ProductRoute = router;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post("/", product_controller_1.ProductController.createProduct);
router.get("/", product_controller_1.ProductController.getAllMovies);
router.get("/:id", product_controller_1.ProductController.getProductById);
router.put("/:id", product_controller_1.ProductController.getProductById);
router.delete("/:id", product_controller_1.ProductController.deleteProduct);
exports.ProductRoute = router;
