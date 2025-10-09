'use server';

import { createQuote as addNewQuote } from '@/lib/firebase';
import { NewQuoteFormState, QuoteSchema } from '@/types/quote';
import z from 'zod';

export async function createQuote(
  currentState: NewQuoteFormState,
  formData: FormData,
): Promise<NewQuoteFormState> {
  console.log('Form data', formData);
  const rawData = {
    quote: formData.get('quote') as string,
    author: formData.get('author') as string,
  };
  const parsed = QuoteSchema.safeParse(rawData);
  console.log('parsed', parsed);

  if (!parsed.success) {
    console.error('Failed parsing form data when adding a new quote', parsed);
    const validationErrors = z.flattenError(parsed.error);
    return {
      success: false,
      message: 'Please correct the form input',
      errors: {
        quote: validationErrors?.fieldErrors?.quote,
        author: validationErrors?.fieldErrors?.author,
      },
    };
  }

  const { quote, author } = parsed.data;
  const userId = formData.get('userId') as string;
  try {
    await addNewQuote(quote, author, userId);

    return {
      success: true,
      message: 'The product is created successfully',
      data: { quote, author },
    };
  } catch (err) {
    console.error('Error adding a new product to Firebase', err);
    return {
      success: false,
      message: 'Failed creating a new product in the database',
      inputs: { ...rawData },
    };
  }
}
