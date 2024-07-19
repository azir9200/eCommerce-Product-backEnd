import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { LoginService } from "./login.service";

const createLogin = async (req: Request, res: Response) => {
  try {
    // const loginData = req.body;
    const result = await LoginService.createLoginIntoDB(req.body);
    console.log(req.body, "req controller");
    res.status(200).json({
      success: true,
      message: "Login created successfully !",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not created Login!",
      error: err,
    });
  }
};

const getAllLogin = catchAsync(async (req, res) => {
  const result = await LoginService.getAllLoginFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Login are retrieved successfully",
    data: result,
  });
});

const getSingleLogin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await LoginService.getSingleLoginFromDB(id);
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
  const result = await LoginService.deleteLoginFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Facility is retrieved successfully",
    data: result,
  });
});

const updateLogin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { facility } = req.body;
  const result = await LoginService.updateLoginIntoDB(id, facility);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is updated successfully",
    data: result,
  });
});

export const LoginController = {
  createLogin,
  getAllLogin,
  getSingleLogin,
  deleteLogin,
  updateLogin,
};
