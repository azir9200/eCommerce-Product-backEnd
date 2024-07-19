import { TLogin } from "./login.interface";
import { LoginModel } from "./login.model";

const createLoginIntoDB = async (payload: TLogin) => {
  const result = await LoginModel.create(payload);
  return result;
};

const getAllLoginFromDB = async () => {
  const result = await LoginModel.find().populate("User");
  return result;
};

const getSingleLoginFromDB = async (id: string) => {
  const result = await LoginModel.findOne({ _id: id });
  return result;
};

const deleteLoginFromDB = async (id: string) => {
  const result = await LoginModel.findOneAndDelete(
    { _id: id },
    { isDeleted: true }
  );
  return result;
};

const updateLoginIntoDB = async (id: string, payload: Partial<TLogin>) => {
  const result = await LoginModel.findOneAndUpdate({ _id: id }, payload);
  return result;
};

export const LoginService = {
  createLoginIntoDB,
  getAllLoginFromDB,
  getSingleLoginFromDB,
  deleteLoginFromDB,
  updateLoginIntoDB,
};
