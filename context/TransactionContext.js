import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        loadBalance();
        
    }, []);

    const loadBalance = async () => {
        try {
            const storedBalance = await AsyncStorage.getItem('balance');
            if (storedBalance !== null) {
                setBalance(parseFloat(storedBalance));
            }
        } catch (error) {
            console.error('Error loading balance:', error);
        }
    };

    const saveBalance = async (updatedBalance) => {
        try {
            await AsyncStorage.setItem('balance', updatedBalance.toString());
        } catch (error) {
            console.error('Error saving balance:', error);
        }
    };
  
    const addTransaction = (type, category, amount) => {
        const newTransaction = { type, category, amount };
        setTransactions([...transactions, newTransaction]);
        
        // Update balance based on transaction type
        const updatedBalance = type === 'Income' ? balance + parseFloat(amount) : balance - parseFloat(amount);
        setBalance(updatedBalance);
        saveBalance(updatedBalance);
        
    };

  //   const updateBalance = (newBalance) => {
  //     setBalance(newBalance);
  //     saveBalance(newBalance);
  // };

  

   

    const deleteTransaction = (index) => {
        const transactionToDelete = transactions[index];
      
        Alert.alert(
            'Confirm Deletion',
            `Are you sure you want to delete the ${transactionToDelete.category} transaction?`,
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
                        const updatedBalance = deletedTransaction.type === 'Income' ? balance - parseFloat(deletedTransaction.amount) : balance + parseFloat(deletedTransaction.amount);
                        setBalance(updatedBalance);
                        saveBalance(updatedBalance);
            
                        setTransactions(updatedTransactions);
                    },
                    style: 'destructive',
                },
            ]
        );
    };
  
  
    return (
      <TransactionContext.Provider value={{ transactions, addTransaction, deleteTransaction, balance, setTransactions }}>
        {children}
      </TransactionContext.Provider>
    );
};

export const useTransactions = () => useContext(TransactionContext);
