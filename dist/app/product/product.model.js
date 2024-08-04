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
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const variantSchema = new mongoose_1.Schema({
    type: { type: String },
    value: { type: String },
});
const inventorySchema = new mongoose_1.Schema({
    quantity: { type: Number },
    inStock: { type: Boolean },
});
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    category: { type: String },
    tags: { type: [String] },
    variants: [variantSchema],
    inventory: { inventorySchema },
});
productSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const isProductExists = yield exports.Product.find({
            id: this._id,
        });
        if (!isProductExists) {
            throw new Error('Product is not exists anymore !');
        }
        next();
    });
});
exports.Product = (0, mongoose_1.model)('Product', productSchema);
