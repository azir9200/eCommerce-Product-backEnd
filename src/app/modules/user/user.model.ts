import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

// Create the User schema
const UserSchema =  new Schema<TUser> ({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "user"],
  },
  address: {
    type: String,
    required: true,
  },
});

export const User = model<TUser>("Product", UserSchema);
