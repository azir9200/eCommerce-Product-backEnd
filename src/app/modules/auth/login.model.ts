import { model, Schema } from "mongoose";
import { TUserLogin } from "./login.interface";

const userSchema = new Schema<TUserLogin>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User id is required"],
      unique: true,
      ref: "User",
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    role: { type: String, enum: ["user", "admin"] },
  },
  {
    timestamps: true,
  }
);

export const userModel = model<TUserLogin>("User", userSchema);
