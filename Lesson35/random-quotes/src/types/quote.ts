import { z } from "zod";

export interface Quote {
  quote: string;
  author: string;
}

export const QuoteSchema = z.object({
  quote: z.string().min(30, 'The quote should be at least 30 chars long.'),
  author: z.string().min(3, 'The author should be at least 3 chars long.'),
});

export interface NewQuoteFormState {
  success: boolean;
  message?: string;
  errors?: {
    [K in keyof Quote]?: string[];
  };
  data?: Partial<Quote>;
}