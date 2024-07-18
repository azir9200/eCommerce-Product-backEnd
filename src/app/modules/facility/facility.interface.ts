import { Types } from "mongoose";

export type TFacility = {
  id: string;
  user: Types.ObjectId;
  name: string;
  description: string;
  pricePerHour: number; // Note: This will be hashed
  location: string;
};
