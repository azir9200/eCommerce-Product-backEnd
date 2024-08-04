import { TProduct } from "./product.interface";
import { Product } from "./product.model";
// import { Product } from "./product.model";


const createProduct = async(payload:TProduct) =>{
    const result = await Product.create(payload);
    return   result;    
}


const getAllProduct = async () =>{
    const result = await Product.find();
    return result;
};

const getProductById = async(id: string)=>{
    const result = await Product.findOne({id:id});
     return result;
}


const updateProductFromDB = async (id: string) => {
    const result = await Product.aggregate([{ $match: { id } }]);
    return result;
  };
  
  const deleteProductFromDB = async (id: string) => {
    const result = await Product.updateOne({ id }, { isDeleted: true });
    return result;
  };

export const ProductService = { 
    createProduct,
    getAllProduct,
    getProductById,
    updateProductFromDB,
    deleteProductFromDB,

}