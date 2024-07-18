import { z } from "zod";

export const facilityValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  pricePerHour: z.string(),
  location: z.string(),
});
