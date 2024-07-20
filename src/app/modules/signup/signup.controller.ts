import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SignupService } from "./signup.service";

const createSignup = catchAsync(async (req, res) => {
  const result = await SignupService.createSignupIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic semester is created successfully",
    data: result,
  });
});

const getAllSignup = catchAsync(async (req, res) => {
  const result = await SignupService.getAllSignupFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Login are retrieved successfully",
    data: result,
  });
});

const getSingleSignup = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SignupService.getSingleSignupFromDB(id);
  console.log("single get, controller", result);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Facility is retrieved successfully",
    data: result,
  });
});

const deleteLogin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SignupService.deleteSignupFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Facility is retrieved successfully",
    data: result,
  });
});

export const SignupController = {
  createSignup,
  getAllSignup,
  getSingleSignup,
  deleteLogin,
};
