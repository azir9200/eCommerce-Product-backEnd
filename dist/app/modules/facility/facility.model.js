"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityModel = void 0;
const mongoose_1 = require("mongoose");
const FacilitySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    id: {
        type: String,
        required: true,
        // unique: true,
    },
    description: { type: String, required: true },
    pricePerHour: { type: Number, required: true },
    location: { type: String, required: true },
    isDeleted: { type: Boolean, required: true },
});
exports.FacilityModel = (0, mongoose_1.model)("Facility", FacilitySchema);
