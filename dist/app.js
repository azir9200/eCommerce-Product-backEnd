"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const globalErrorhandler_1 = __importDefault(require("./app/middleware/globalErrorhandler"));
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", routes_1.default);
// app.use("/api/auth/signup", signupRouter);
// app.use("/api/auth/login", loginRouter);
// app.use("/api/facility", facilityRouter);
app.get("/", (req, res) => {
    res.send("Hey welcome all you  World!");
});
app.use(globalErrorhandler_1.default);
app.use(notFound_1.default);
exports.default = app;
