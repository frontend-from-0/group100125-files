'use client';
import { quotes } from '../../quotes.js';
import { useState } from 'react';
import Card from '../components/Card.jsx';
import { Title, align } from '../components/Title.jsx';

export default function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  function handleSubmit() {
    console.log('The button is clicked!');
    console.log('The next quote is:', quotes[currentQuoteIndex].quote);

    setCurrentQuoteIndex((prev) => prev + 1);
  }

  return (
    <main className='min-h-dvh flex items-center justify-center bg-slate-600'>
      {/* TODO: maybe set height for the div element */}
      <Card>
        <Title label={quotes[currentQuoteIndex].quote} align={align.center} />
        <span className='text-end block'>
          {quotes[currentQuoteIndex].author}
        </span>
        <button
          onClick={handleSubmit}
          className='bg-slate-400 rounded-lg p-2 hover:bg-slate-500 mt-8'
        >
          Next quote
        </button>
      </Card>
    </main>
  );
}
