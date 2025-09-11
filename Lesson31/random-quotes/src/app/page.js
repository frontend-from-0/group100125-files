'use client';
import { useState } from 'react';
import Card from '../components/Card.jsx';
import { Title, align } from '../components/Title.jsx';
import Button from '@/components/Button';
import { useQuotesContext } from './QuotesContext.js';

export default function Home() {
  const quotes = useQuotesContext();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(quotes.length-1);
  console.log('In the home component!', quotes);

  function handleNextClick() {
    console.log('The button is clicked!');
    console.log('The next quote is:', quotes[currentQuoteIndex].quote);

    // TODO: we need to add logic so that we don't get outside the range of array
    setCurrentQuoteIndex((prev) => prev - 1);

  }

  return (
    <main className='min-h-dvh flex items-center justify-center bg-slate-600'>
      {/* TODO: maybe set height for the div element */}
      <Card>
        <Title label={quotes[currentQuoteIndex].quote} align={align.center} />
        <span className='text-end block'>
          {quotes[currentQuoteIndex].author}
        </span>
        <Button onClick={handleNextClick} label='Next quote' />
      </Card>
    </main>
  );
}
