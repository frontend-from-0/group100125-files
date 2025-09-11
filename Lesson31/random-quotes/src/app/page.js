'use client';
import { useState } from 'react';
import {Button} from '@/components/ui/button';
import { useQuotesContext } from './QuotesContext.js';
import { Card, CardTitle, CardContent } from '@/components/ui/card.jsx';

export default function Home() {
  const quotes = useQuotesContext();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(quotes.length - 1);
  console.log('In the home component!', quotes);

  function handleNextClick() {
    console.log('The button is clicked!');
    console.log('The next quote is:', quotes[currentQuoteIndex].quote);

    // TODO: we need to add logic so that we don't get outside the range of array
    setCurrentQuoteIndex((prev) => prev - 1);
  }

  return (
    <main className='min-h-dvh flex items-center justify-center'>
      <Card className={'max-w-lg w-full'}>
        <CardContent>
          <CardTitle  className='text-center my-8' >{quotes[currentQuoteIndex].quote}</CardTitle>
          <span className='text-end block'>
            {quotes[currentQuoteIndex].author}
          </span>
          <Button className='mt-12 w-full' onClick={handleNextClick}>Next quote</Button>
        </CardContent>
      </Card>
    </main>
  );
}
