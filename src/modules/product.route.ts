import express, { Request, Response } from "express"
import { Product } from "./product.model";
 

const router = express.Router();



router.post("/", async(req: Request, res: Response)  =>{


    const result = await Product.create(req.body);
    res.json({
        success: true,
        message: "Product is created successfully !",
        data: result,
    })

    console.log(req.body);
    // res.send("hello my products  ");

  
    

});


export const ProductRoute = router;