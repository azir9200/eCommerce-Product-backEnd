"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = exports.createProductValidationSchema = void 0;
const zod_1 = require("zod");
const variantValidationSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
const inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number(),
    inStock: zod_1.z.boolean()
});
exports.createProductValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.number(),
    category: zod_1.z.string(),
    tags: zod_1.z.string(),
    variants: variantValidationSchema,
    inventory: inventoryValidationSchema,
});
exports.productValidation = {
    createProductValidationSchema: exports.createProductValidationSchema,
};
