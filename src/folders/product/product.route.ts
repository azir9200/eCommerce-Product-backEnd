// import express, { Request, Response } from "express"
// import { Product } from "./product.model";
 
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
import express from "express";
import { ProductController } from "./product.controller";
import { createProductValidationSchema, productValidation } from "./productValidation";


const router = express.Router();

router.post("/",ProductController.createProduct);

router.get("/", ProductController.getAllMovies);

router.get("/:id", ProductController.getProductById)

router.put("/:id", ProductController.getProductById)

router.delete("/:id", ProductController.deleteProduct)


export const ProductRoute = router;