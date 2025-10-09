'use server';
import { NewQuoteFormState, QuoteSchema } from '@/types/quote';
import z from 'zod';

export async function createQuote(
  currentState: NewQuoteFormState,
  formData: FormData,
): Promise<NewQuoteFormState> {
  console.log(formData);

  const rawData = {
    quote: formData.get('quote') as string,
    author: formData.get('quote') as string,
  };

  const userId = formData.get('userId') as string;
  const parsed = QuoteSchema.safeParse(rawData);

  console.log('parsed', parsed);

  if (!parsed.success) {
    console.error('Error pasing data when creating a new quote.');
    const flattened = z.flattenError(parsed.error);

    return {
      success: false,
      data: rawData,
      errors: {
        quote: flattened?.fieldErrors?.quote,
        author: flattened?.fieldErrors?.author,
      },
    };
  } else {
    // TODO: Add data to DB, make sure to include userId 
    /* 

    {
      quoteId: string;
      userId: string;
      quote: string;
      author: string;
      createdAt: DateTime;
      updatedAt: DateTime;
      validated: boolean;
    }
    
    */


    return {
      success: true,
      data: rawData,
    };
  }
}
