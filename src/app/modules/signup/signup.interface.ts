export type TSignup = {
  id: string;
  name: string;
  email: string;
  password: string; // Note: This will be hashed
  phone: string;
  role: "admin" | "user";
  address: string;
};
