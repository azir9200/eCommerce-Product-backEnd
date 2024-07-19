import { z } from "zod";

export const loginValidationSchema = z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
});
