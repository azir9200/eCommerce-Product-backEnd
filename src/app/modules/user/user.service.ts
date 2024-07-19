import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await User.find();
  return result;
};

const getSingleUserFromDB = async (_id: string) => {
  const result = await User.findOne({ id: _id });
  return result;
};

const updateUserFromDB = async (id: string, payload: Partial<TUser>) => {
  // const result = await User.aggregate([{ $match: { id } }]);
  const result = await User.findOneAndUpdate({ id }, payload);
  return result;
};

const deleteUserFromDB = async (id: string) => {
  const result = await User.deleteOne({ id }, { isDeleted: true });
  return result;
};

export const UserService = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
  deleteUserFromDB,
};
