import { z } from "zod";

export const userValidationSchema = z.object({
  id: z.string(),
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

export const updateUerValidationSchema = z.object({
  id: z.string().optional(),
  name: z.string().nonempty({ message: "Name is required" }).optional(),
  email: z.string().email({ message: "Invalid email address" }).optional(),
  
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  phone: z
    .string()
    .nonempty({ message: "Phone number is required" })
    .optional(),
  role: z
    .enum(["admin", "user"], {
      message: "Role must be either 'admin' or 'user'",
    })
    .optional(),
  address: z.string().nonempty({ message: "Address is required" }).optional(),
});

// export const userValidation = {
//   userValidationSchema,
// };
