'use client';
import { createContext, useState, useContext, ReactNode } from 'react';
import { quotes as quotesArray } from '../../quotes';
import { Quote } from '../../quotes';

const QuotesContext = createContext<Quote[]>([]);
const QuotesDispatchContext = createContext<((newQuote: Quote) => void) | undefined>((undefined));


interface QuotesProviderProps {
  children?: ReactNode;
}

export const QuotesProvider = ({ children }: QuotesProviderProps) => {
  const [quotes, setQuotes] = useState<Quote[]>([
    ...quotesArray,
    { quote: 'Dummy quote', author: 'Dummy quote author' },
  ]);

  console.log('Quotes are', quotes.length);

  function handleUpdateQuotes(newQuote:Quote) {
    console.log('Adding a new quote!');
    setQuotes((prev) => {
      console.log('old quotes are', prev.length);
      return [...prev, newQuote];
    });
  }

  return (
    <QuotesContext.Provider value={quotes}>
      <QuotesDispatchContext.Provider value={handleUpdateQuotes}>
        {children}
      </QuotesDispatchContext.Provider>
    </QuotesContext.Provider>
  );
};

// Custom hooks (useQuotesContext, useQuotesDispatchContext)
export const useQuotesContext = () => useContext(QuotesContext);
export const useQuotesDispatchContext = () => useContext(QuotesDispatchContext);
