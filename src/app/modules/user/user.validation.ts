import { z } from "zod";

export const userValidationSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  phone: z.string().nonempty({ message: "Phone number is required" }),
  role: z.enum(["admin", "user"], {
    message: "Role must be either 'admin' or 'user'",
  }),
  address: z.string().nonempty({ message: "Address is required" }),
});

// export const userValidation = {
//   userValidationSchema,
// };
