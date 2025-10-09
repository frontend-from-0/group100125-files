import { z } from "zod";

export interface Quote {
  quote: string;
  author: string;
}

export const QuoteSchema = z.object({
  quote: z.string().min(30),
  author: z.string().min(3),
});

export interface NewQuoteFormState {
  success: boolean;
  message?: string;
  inputs?: Partial<Quote>;
  errors?: {
    [K in keyof Quote]?: string[];
  };
  data?: Partial<Quote>;
}