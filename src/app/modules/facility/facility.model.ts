import { model, Schema } from "mongoose";
import { TFacility } from "./facility.interface";

const FacilitySchema = new Schema<TFacility>({
  name: { type: String, required: true },
  id: {
    type: String,
    required: true,
    // unique: true,
  },
  description: { type: String, required: true },
  pricePerHour: { type: Number, required: true },
  location: { type: String, required: true },
  isDeleted: { type: Boolean, required: true },
});

export const FacilityModel = model<TFacility>("Facility", FacilitySchema);
