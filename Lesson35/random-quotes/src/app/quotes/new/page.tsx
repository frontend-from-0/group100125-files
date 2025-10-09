'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createQuote } from '@/app/actions/quote';
import { useActionState } from 'react';
import { useAuth } from '@/app/AuthProvider';
import { NewQuoteFormState, QuoteSchema } from '@/types/quote';

type QuoteFormData = z.infer<typeof QuoteSchema>;

export default function NewQuotePage() {
  const { user } = useAuth();

  const [state, action, pending] = useActionState<NewQuoteFormState, FormData>(
    createQuote,
    {
      success: false,
    },
  );

  const {
    register,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(QuoteSchema),
    mode: 'onChange',
    defaultValues: {
      quote: state.data?.quote ?? '',
      author: state.data?.author ?? '',
    },
  });

  if (state.success) return <p>Quote added successfully</p>;

  return (
    <form action={action} className='max-w-4xl mx-auto flex flex-col gap-3'>
      <div>
        <input type='hidden' name='userId' value={user?.uid} />
      </div>
      <div>
        <input
          type='text'
          placeholder='Quote'
          {...register('quote')}
          className='w-full border p-2 rounded'
        />
        {errors.quote && (
          <p className='text-red-500 text-sm'>{errors.quote.message}</p>
        )}
        {state.errors?.quote && (
          <p className='text-red-500 text-sm'>
            {state.errors.quote.join(', ')}
          </p>
        )}
      </div>

      <div>
        <input
          type='text'
          placeholder='Author'
          {...register('author')}
          className='w-full border p-2 rounded'
        />
        {errors.author && (
          <p className='text-red-500 text-sm'>{errors.author.message}</p>
        )}
        {state.errors?.author && (
          <p className='text-red-500 text-sm'>
            {state.errors.author.join(', ')}
          </p>
        )}
      </div>

      <button
        type='submit'
        disabled={
          pending || !!errors.author?.message || !!errors.quote?.message
        }
        className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50'
      >
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
