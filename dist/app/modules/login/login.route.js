"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = __importDefault(require("express"));
const login_controller_1 = require("./login.controller");
const router = express_1.default.Router();
router.post("/login/create-login", login_controller_1.LoginController.createLogin);
router.get("/", login_controller_1.LoginController.getAllLogin);
router.get("/:id", login_controller_1.LoginController.getSingleLogin);
router.delete("/:id", login_controller_1.LoginController.deleteLogin);
router.patch("/:id", login_controller_1.LoginController.updateLogin);
exports.loginRouter = router;
