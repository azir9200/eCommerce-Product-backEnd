import { RequestHandler } from "express";
import { LoginServices } from "./login.service";

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

export const AuthControllers = {
  userLogin,
};
