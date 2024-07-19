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
  const result = await FacilityModel.findOne({ _id: id });
  return result;
};

const deleteFacilityFromDB = async (id: string) => {
  const result = await FacilityModel.findOneAndDelete(
    { _id: id },
    { isDeleted: true }
  );
  return result;
};

const updateFacilityIntoDB = async (
  id: string,
  payload: Partial<TFacility>
) => {
  const result = await FacilityModel.findOneAndUpdate({ _id: id }, payload);
  return result;
};

export const FacilityService = {
  createFacilityIntoDB,
  getAllFacilityFromDB,
  getSingleFacilityFromDB,
  deleteFacilityFromDB,
  updateFacilityIntoDB,
};
