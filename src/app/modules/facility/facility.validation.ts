import { z } from "zod";

export const facilityValidationSchema = z.object({
  name: z.string(),
  id: z.string().optional(),
  description: z.string(),
  pricePerHour: z.string(),
  location: z.string(),
  isDeleted: z.string(),
});
