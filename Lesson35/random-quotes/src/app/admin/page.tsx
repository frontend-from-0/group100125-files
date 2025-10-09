'use client';

import Card from '@/components/Card';
import { useState } from 'react';
import { useQuotesDispatchContext } from '../QuotesContext';
import { Button } from '@/components/ui/button';
import { Quote } from '@/types/quote';

export default function AdminPage() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const updateQuotes = useQuotesDispatchContext();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Form submitted!', quote, author);

    updateQuotes?.({ quote, author } as Quote);
    setQuote('');
    setAuthor('');
    // You normally have to validate the input data but we are skipping it on purpose this time
  }

  const isSubmitDisabled = quote.length === 0 || author.length === 0;

  return (
    <main className='min-h-dvh flex items-center justify-center bg-slate-600'>
      <Card>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <label htmlFor='quote'>Quote</label>
          <input
            type='text'
            id='quote'
            className='bg-slate-400 rounded-lg p-2'
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />

          <label htmlFor='author'>Author</label>
          <input
            type='text'
            id='author'
            className='bg-slate-400 rounded-lg p-2'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <Button
            disabled={isSubmitDisabled}
            type='submit'
          >
            Add a quote
          </Button>
        </form>
      </Card>
    </main>
  );
}
