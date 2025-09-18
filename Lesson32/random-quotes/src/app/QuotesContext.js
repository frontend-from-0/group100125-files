'use client';
import { createContext, useState, useContext } from 'react';
import { quotes as quotesArray } from '../../quotes';

const QuotesContext = createContext([]);
const QuotesDispatchContext = createContext(undefined);

export const QuotesProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([
    ...quotesArray,
    { quote: 'Dummy quote', author: 'Dummy quote author' },
  ]);

  console.log('Quotes are', quotes.length);

  function handleUpdateQuotes(newQuote) {
    console.log('Adding a new quote!');
    setQuotes(prev => {
      console.log('old quotes are', prev.length);
      return [ ...prev, newQuote]
    })
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
