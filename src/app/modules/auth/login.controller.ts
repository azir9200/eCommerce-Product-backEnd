import { RequestHandler } from "express";
import { LoginServices } from "./login.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const userLogin: RequestHandler = async (req, res, next) => {
  try {
    const result = await LoginServices.loginExistingUser(req.body);

    res.status(200).json({
      success: true,
      message: "User login successful",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getMe = catchAsync(async (req, res) => {
  const { email, role } = req.user;
  const result = await LoginServices.getMe(email, role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is retrieved successfully',
    data: result,
  });
});

export const AuthControllers = {
  userLogin,
  getMe,
};
