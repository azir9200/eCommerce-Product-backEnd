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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const login_model_1 = require("./login.model");
const createLoginIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield login_model_1.LoginModel.create(payload);
    return result;
});
const getAllLoginFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield login_model_1.LoginModel.find().populate("User");
    return result;
});
const getSingleLoginFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield login_model_1.LoginModel.findOne({ _id: id });
    return result;
});
const deleteLoginFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield login_model_1.LoginModel.findOneAndDelete({ _id: id }, { isDeleted: true });
    return result;
});
const updateLoginIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield login_model_1.LoginModel.findOneAndUpdate({ _id: id }, payload);
    return result;
});
exports.LoginService = {
    createLoginIntoDB,
    getAllLoginFromDB,
    getSingleLoginFromDB,
    deleteLoginFromDB,
    updateLoginIntoDB,
};
