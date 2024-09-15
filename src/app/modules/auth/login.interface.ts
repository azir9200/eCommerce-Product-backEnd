import { Types } from "mongoose";

export type TUserLogin = {
  user: Types.ObjectId;
  email: string;
  password: string;
  role?: "user" | "admin";
};
