"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupModel = void 0;
const mongoose_1 = require("mongoose");
// Create the User schema
const SignupSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        // unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "user"],
    },
    address: {
        type: String,
        required: true,
    },
});
exports.SignupModel = (0, mongoose_1.model)("Signup", SignupSchema);
