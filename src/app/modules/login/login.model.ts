import { model, Schema } from "mongoose";
import { TLogin } from "./login.interface";

const LoginSchema = new Schema<TLogin>({
  id: {
    type: String,
    required: true,
    // unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User id is required"],
    unique: true,
    ref: "User",
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const LoginModel = model<TLogin>("Login", LoginSchema);
