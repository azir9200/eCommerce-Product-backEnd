import { model, Schema } from "mongoose";
import { TSignup } from "./signup.interface";

// Create the User schema
const SignupSchema = new Schema<TSignup>({
  id: {
    type: String,
    required: true,
    // unique: true,
  },
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

export const SignupModel = model<TSignup>("Signup", SignupSchema);
