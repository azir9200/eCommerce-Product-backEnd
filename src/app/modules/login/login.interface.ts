import { Types } from "mongoose";

export type TLogin = {
    id: string;
    user: Types.ObjectId;
    email: string;
    password: string;   
  };
  