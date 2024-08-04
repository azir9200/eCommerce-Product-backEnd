"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facilityValidationSchema = void 0;
const zod_1 = require("zod");
exports.facilityValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    id: zod_1.z.string().optional(),
    description: zod_1.z.string(),
    pricePerHour: zod_1.z.string(),
    location: zod_1.z.string(),
    isDeleted: zod_1.z.string(),
});
