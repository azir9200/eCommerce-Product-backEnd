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
exports.ProductService = exports.searchedProduct = void 0;
const product_model_1 = require("./product.model");
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payload);
    return result;
});
const getAllProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    let searchTerm = "";
    if (payload === null || payload === void 0 ? void 0 : payload.searchTerm) {
        searchTerm = payload.searchTerm;
    }
    const searchAbleFields = ["name"];
    const searchedProduct = yield product_model_1.Product.find({
        $or: searchAbleFields.map((field) => ({
            [field]: { $regex: searchTerm, $options: "i" },
        })),
    });
    return searchedProduct;
    // const result = await Product.find();
    // return result;
});
const searchedProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    let searchTerm = "";
    if (payload === null || payload === void 0 ? void 0 : payload.searchTerm) {
        searchTerm = payload.searchTerm;
    }
    const searchAbleFields = ["name", "price"];
    const searchedProduct = yield product_model_1.Product.find({
        $or: searchAbleFields.map((field) => ({
            [field]: { $regex: searchTerm, $options: "i" },
        })),
    });
    return searchedProduct;
});
exports.searchedProduct = searchedProduct;
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findOne({ id: id });
    return result;
});
const updateProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.aggregate([{ $match: { id } }]);
    return result;
});
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.updateOne({ id }, { isDeleted: true });
    return result;
});
exports.ProductService = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProductFromDB,
    deleteProductFromDB,
};
