"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const variantSchema = new mongoose_1.Schema({
    type: { type: String, required: true, },
    value: { type: String, required: true, },
});
const inventorySchema = new mongoose_1.Schema({
    quantity: { type: Number },
    inStock: { type: Boolean },
});
const productSchema = new mongoose_1.Schema({ name: {
        type: String,
        required: [true, "Description is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    price: {
        type: Number,
        required: [true, "Description is required"],
    },
    category: {
        type: String,
        required: [true, "Description is required"],
    },
    tags: {
        type: String,
        required: [true, "Description is required"],
    },
    variants: {
        type: [variantSchema],
    },
    inventory: {
        type: [inventorySchema]
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    viewCount: {
        type: Number,
        default: 0,
    },
});
exports.Product = (0, mongoose_1.model)("Product", productSchema);
