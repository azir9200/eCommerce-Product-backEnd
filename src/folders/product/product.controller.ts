import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) =>{
    const productData = req.body;
    const result = await ProductService.createProduct(productData);

    res.json({
        success: true,
        message: "Product is created successfully !",
        data: result,
    });
};

const getAllMovies = async( req:Request, res: Response) =>{
    try{
        const result = await ProductService.getAllProduct();

        res.status(200).json({
            success: true,
            message: "Movies are fetched successfully !",
            data: result,
          });
        } catch (err) {
          res.status(500).json({
            success: false,
            message: "Could not fetch movies!",
            error: err,
          });
        };
    };


    const getProductById = async(req: Request, res: Response)=>{
        try{
            const {id} = req.params;
            const result = await ProductService.getProductById(id);
            console.log(req.body);
            res.status(200).json({
                success: true,
                message: "Product fetched successfully!",
                data: result,
              });
            } catch (err) {
              res.status(500).json({
                success: false,
                message: "hey Dev, Could not fetch movies!",
                error: err,
              });
            };
    }


    const deleteProduct = async(req: Request, res: Response)=>{
        try{
            const {id} = req.params;
            const result = await ProductService.deleteProductFromDB(id);
       
          res.status(200).json({
         success: true,
         message: 'Product is deleted successfully !',
         data: result,
        });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "hey Dev, Could not fetch movies!",
        error: err,
      });
    
    };
}

export const ProductController = {
    createProduct,
    getAllMovies,
    getProductById,
    deleteProduct,
}