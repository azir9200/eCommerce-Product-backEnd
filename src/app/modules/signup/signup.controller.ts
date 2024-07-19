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

export const SignupController = {
  createSignup,
};
