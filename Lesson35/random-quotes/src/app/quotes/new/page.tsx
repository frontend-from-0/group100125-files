'use client';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useActionState } from 'react';
import { NewQuoteFormState, QuoteSchema } from '@/types/quote';
import { createQuote } from '@/app/actions/quotes';
import { useAuth } from '@/app/AuthProvider';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

type QuoteFormData = z.infer<typeof QuoteSchema>;

export default function CreateNewQuote() {
  const { user } = useAuth();

  const [state, action, isPending] = useActionState<
    NewQuoteFormState,
    FormData
  >(createQuote, { success: false });

  const {
    register,
    formState: { isDirty, errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(QuoteSchema),
    mode: 'all',
    defaultValues: {
      quote: state.data?.quote,
      author: state.data?.author,
    },
  });

  if (state.success) {
    return (
      <div>
        <p>This form is submitted successfully.</p>
        {state.data?.quote && <h2>{state.data?.quote}</h2>}
        {state.data?.author && <p>{state.data?.author}</p>}
      </div>
    );
  }

  return (
    <form
      className='max-w-md mx-auto mt-10 flex flex-col gap-6'
      noValidate
      action={action}
    >
      <h1 className='text-center'>Create New Quote</h1>
      <input type='hidden' name='userId' defaultValue={user?.uid} />
      <div className='flex flex-col gap-4'>
        <Label htmlFor='quote'>Quote</Label>
        <Input className='p-2' {...register('quote')} />
        {errors?.quote && <p>{errors?.quote?.message}</p>}
        {!isDirty && state.errors?.quote && <p>{state.errors?.quote}</p>}
      </div>

      <div className='flex flex-col gap-4'>
        <Label htmlFor='author'>Author</Label>
        <Input className='p-2' {...register('author')} />
        {state.errors?.author && <p>{state.errors?.author}</p>}
      </div>

      <Button type='submit'>Submit</Button>
    </form>
  );
}
