import { TFacility } from "./facility.interface";
import { FacilityModel } from "./facility.model";

const createFacilityIntoDB = async (payload: TFacility) => {
  const result = await FacilityModel.create(payload);
  return result;
};

const getAllFacilityFromDB = async () => {
  const result = await FacilityModel.find();
  return result;
};

const getSingleFacilityFromDB = async (id: string) => {
  const result = await FacilityModel.findOne({ id: id });
  return result;
};

export const FacilityService = {
  createFacilityIntoDB,
  getAllFacilityFromDB,
  getSingleFacilityFromDB,
};
