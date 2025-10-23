import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(1),
  description: z.string().max(500),
  brand: z.string().max(50),
  serialNumber: z.string().max(100),
  priceAmount: z.coerce.number().min(0),
  priceCurrency: z.string().min(3).max(3),
  taxRate: z.coerce.number().min(0).max(100),
  image: z.string(),
  category: z.string().min(1).max(50),
  stock: z.coerce.number().min(0).max(999),
  draft: z.boolean(),
  discountRate: z.coerce.number().min(0).max(100).optional(),
});

export type ProductFormInput = z.infer<typeof productSchema>;

