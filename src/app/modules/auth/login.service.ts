import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../../config";
import httpStatus from "http-status";
import { TUserLogin } from "./login.interface";
import { TUser } from "../user/user.interface";
// import { User } from "../user/user.model";
import AppError from "../../error/app.Error";
import { userModel } from "../user/user.model";

const loginExistingUser = async (payload: TUserLogin) => {
  const isUserExist = (await userModel
    .findOne({
      email: payload.email,
    })
    .select("+password")) as TUser | null;

  if (!isUserExist) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      "This user does not exist!",
      "Unauthorized access request!"
    );
  }
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    isUserExist.password
  );

  if (!isPasswordMatched) {
    throw new AppError(
      httpStatus.UNAVAILABLE_FOR_LEGAL_REASONS,
      "You do not have the necessary permissions to access this resource."
    );
  }

  const jwtPayload = {
    role: isUserExist.role,
    email: isUserExist.email,
  };

  const secret = config.jwt_access_secret as string;

  const accessToken = jwt.sign(jwtPayload, secret, {
    expiresIn: "10d",
  });
  const user = {
    email: isUserExist?.email,
    role: isUserExist?.role,
  };
  return { user, token: accessToken };
};

const getMe = async (email: string, role: string) => {
  let result = null;
  if (role === "user") {
    result = await userModel.findOne({ email: email }).populate("User");
  }
  if (role === "admin") {
    result = await userModel.findOne({ email: email }).populate("User");
  }

  return result;
};

export const LoginServices = {
  loginExistingUser,
  getMe,
};
