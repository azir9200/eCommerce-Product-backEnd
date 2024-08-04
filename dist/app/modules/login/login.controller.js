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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const login_service_1 = require("./login.service");
const createLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const loginData = req.body;
        const result = yield login_service_1.LoginService.createLoginIntoDB(req.body);
        console.log(req.body, "req controller");
        res.status(200).json({
            success: true,
            message: "Login created successfully !",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not created Login!",
            error: err,
        });
    }
});
const getAllLogin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield login_service_1.LoginService.getAllLoginFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Login are retrieved successfully",
        data: result,
    });
}));
const getSingleLogin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield login_service_1.LoginService.getSingleLoginFromDB(id);
    console.log("single get, controller", result);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single Facility is retrieved successfully",
        data: result,
    });
}));
const deleteLogin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield login_service_1.LoginService.deleteLoginFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single Facility is retrieved successfully",
        data: result,
    });
}));
const updateLogin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { facility } = req.body;
    const result = yield login_service_1.LoginService.updateLoginIntoDB(id, facility);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Student is updated successfully",
        data: result,
    });
}));
exports.LoginController = {
    createLogin,
    getAllLogin,
    getSingleLogin,
    deleteLogin,
    updateLogin,
};
