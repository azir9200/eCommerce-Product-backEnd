import { model, Schema } from "mongoose";
import { TFacility } from "./facility.interface";

const FacilitySchema = new Schema<TFacility>({
  name: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User id is required"],
    unique: true,
    ref: "User",
  },
  description: { type: String, required: true },
  pricePerHour: { type: Number, required: true },
  location: { type: String, required: true },
});

export const FacilityModel = model<TFacility>("Facility", FacilitySchema);
