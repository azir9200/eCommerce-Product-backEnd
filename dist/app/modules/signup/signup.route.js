"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupRouter = void 0;
const express_1 = __importDefault(require("express"));
const signup_controller_1 = require("./signup.controller");
const router = express_1.default.Router();
router.post("/create-signup", signup_controller_1.SignupController.createSignup);
router.get("/", signup_controller_1.SignupController.getAllSignup);
router.get("/:id", signup_controller_1.SignupController.getSingleSignup);
router.delete("/:id", signup_controller_1.SignupController.deleteLogin);
exports.signupRouter = router;
