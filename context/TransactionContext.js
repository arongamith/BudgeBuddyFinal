import React, { createContext, useContext, useState } from 'react';

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0);
  
    const addTransaction = (type, category, amount) => {
      const newTransaction = { type, category, amount };
      setTransactions([...transactions, newTransaction]);
      
      // Update balance based on transaction type
      if (type === 'Income') {
        setBalance(balance + parseFloat(amount));
      } else if (type === 'Expense') {
        setBalance(balance - parseFloat(amount));
      }
    };
  
    return (
      <TransactionContext.Provider value={{ transactions, addTransaction, balance }}>
        {children}
      </TransactionContext.Provider>
    );
  };

export const useTransactions = () => useContext(TransactionContext);