import { Request, Response } from "express";
import { UserService } from "./user.service";
import { userValidationSchema } from "./user.validation";

const createUser = async (req: Request, res: Response) => {
  const userData = req.body;
  const zodParseData = await userValidationSchema.parse(userData);
  const result = await UserService.createUserIntoDB(zodParseData);

  res.json({
    success: true,
    message: "Product is created successfully !",
    data: result,
  });
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUsersFromDB();

    res.status(200).json({
      success: true,
      message: "Users are fetched successfully !",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not fetch Users!",
      error: err,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserService.getSingleUserFromDB(userId);

    res.status(200).json({
      success: true,
      message: "Users are fetched successfully !",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not fetch movies!",
      error: err,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserService.deleteUserFromDB(userId);

    res.status(200).json({
      success: true,
      message: "User  deleted successfully !",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "hey Dev, Could not delete User!",
      error: err,
    });
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
};
