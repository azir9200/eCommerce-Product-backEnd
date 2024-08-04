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
exports.SignupService = void 0;
const signup_model_1 = require("./signup.model");
const createSignupIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield signup_model_1.SignupModel.create(payload);
    return result;
});
const getAllSignupFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield signup_model_1.SignupModel.find();
    return result;
});
const getSingleSignupFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield signup_model_1.SignupModel.findOne({ _id: id });
    return result;
});
const deleteSignupFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield signup_model_1.SignupModel.findOneAndDelete({ _id: id }, { isDeleted: true });
    return result;
});
const updateSignupIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield signup_model_1.SignupModel.findOneAndUpdate({ _id: id }, payload);
    return result;
});
exports.SignupService = {
    createSignupIntoDB,
    getAllSignupFromDB,
    getSingleSignupFromDB,
    updateSignupIntoDB,
    deleteSignupFromDB,
};
