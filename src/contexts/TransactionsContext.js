import React, { createContext, useState } from 'react';

export const TransactionsContext = createContext();

const TransactionsProvider = ({children}) => {
  const [transactions, setTransactions] = useState([]);

  const addTransactions = (transaction) => {
    return Array.isArray(transaction)
      ? setTransactions([...transactions, ...transaction])
      : setTransactions([transaction, ...transactions]);
  };

  return (
    <TransactionsContext.Provider value={{addTransactions, transactions}}>
      {children}
    </TransactionsContext.Provider>
  );

};

export default TransactionsProvider;