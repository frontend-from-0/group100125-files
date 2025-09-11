'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
import {useState} from 'react';
import { useQuotesDispatchContext } from '../QuotesContext';

export default function AdminPage() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const updateQuotes = useQuotesDispatchContext();


  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted!',quote, author);

    updateQuotes({quote, author});
    setQuote('');
    setAuthor('');
    // You normally have to validate the input data but we are skipping it on purpose this time
  }

  return (
    <main className='min-h-dvh flex items-center justify-center bg-slate-600'>
      <Card>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <label for='quote'>Quote</label>
          <input
            type='text'
            id='quote'
            className='bg-slate-400 rounded-lg p-2'
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />

          <label for='author'>Author</label>
          <input
            type='text'
            id='author'
            className='bg-slate-400 rounded-lg p-2'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <Button onClick={handleSubmit} label='Add a quote' type='submit' />
        </form>
      </Card>
    </main>
  );
}
