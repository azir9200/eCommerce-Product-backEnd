import httpStatus from "http-status";
import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";
import AppError from "../../error/app.Error";

const createProductIntoDB = async (productData: TProduct) => {
  const result = await ProductModel.create(productData);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};
const getCategoryProductFromDB = async (category: string) => {
  const result = await ProductModel.findById(category);
  return result;
};

const updateProductFromDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await ProductModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Data not found !");
  }
  return result;
};

const deleteServiceFromDB = async (id: string) => {
  const result = await ProductModel.findOneAndUpdate({ id });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Data not found !");
  }
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  getCategoryProductFromDB,
  updateProductFromDB,
  deleteServiceFromDB,
};