"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModel = void 0;
const mongoose_1 = require("mongoose");
const LoginSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        // unique: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "User id is required"],
        unique: true,
        ref: "User",
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
});
exports.LoginModel = (0, mongoose_1.model)("Login", LoginSchema);
