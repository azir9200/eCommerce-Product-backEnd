import { TSignup } from "./signup.interface";
import { SignupModel } from "./signup.model";

const createSignupIntoDB = async (payload: TSignup) => {
  const result = await SignupModel.create(payload);
  return result;
};

const getAllSignupFromDB = async () => {
  const result = await SignupModel.find();
  return result;
};

const getSingleSignupFromDB = async (id: string) => {
  const result = await SignupModel.findOne({ _id: id });
  return result;
};

const deleteSignupFromDB = async (id: string) => {
  const result = await SignupModel.findOneAndDelete(
    { _id: id },
    { isDeleted: true }
  );
  return result;
};

const updateSignupIntoDB = async (id: string, payload: Partial<TSignup>) => {
  const result = await SignupModel.findOneAndUpdate({ _id: id }, payload);
  return result;
};

export const SignupService = {
  createSignupIntoDB,
  getAllSignupFromDB,
  getSingleSignupFromDB,
  updateSignupIntoDB,
  deleteSignupFromDB,
};
