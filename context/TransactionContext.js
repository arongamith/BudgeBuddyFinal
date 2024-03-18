import React, { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';

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

    const deleteTransaction = (index) => {
      const transactionToDelete = transactions[index];
    
      Alert.alert(
        'Confirm Deletion',
        `Are you sure you want to delete the ${transactionToDelete.type.toLowerCase()} transaction?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            onPress: () => {
              const updatedTransactions = [...transactions];
              const deletedTransaction = updatedTransactions.splice(index, 1)[0];
    
              // Adjust balance if needed
              if (deletedTransaction.type === 'Income') {
                setBalance(balance - parseFloat(deletedTransaction.amount));
              } else if (deletedTransaction.type === 'Expense') {
                setBalance(balance + parseFloat(deletedTransaction.amount));
              }
    
              setTransactions(updatedTransactions);
            },
            style: 'destructive',
          },
        ]
      );
    };
  
  
    return (
      <TransactionContext.Provider value={{ transactions, addTransaction, deleteTransaction, balance }}>
        {children}
      </TransactionContext.Provider>
    );
  };

export const useTransactions = () => useContext(TransactionContext);