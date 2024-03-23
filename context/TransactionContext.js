import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';








const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0);

    
    const reference = firebase
        .app()
        .database('https://budgebuddy-38453-default-rtdb.asia-southeast1.firebasedatabase.app/')
        .ref('/transactions');
    

    useEffect(() => {
        loadTransactions();
        loadBalance();
    }, []);

    const loadTransactions = async () => {
        try {
            const storedTransactions = await AsyncStorage.getItem('transactions');
            if (storedTransactions !== null) {
                setTransactions(JSON.parse(storedTransactions));
            }
        } catch (error) {
            console.error('Error loading transactions:', error);
        }
    };

    const saveTransactions = async (updatedTransactions) => {
        try {
            await AsyncStorage.setItem('transactions', JSON.stringify(updatedTransactions));
        } catch (error) {
            console.error('Error saving transactions:', error);
        }
    };

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
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
        const date = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${date}`;

        const newTransaction = { type, date: formattedDate, category, amount };
        const updatedTransactions = [...transactions, newTransaction];
        setTransactions(updatedTransactions);
        saveTransactions(updatedTransactions);

        // Update balance based on transaction type
        const updatedBalance = type === 'Income' ? balance + parseFloat(amount) : balance - parseFloat(amount);
        setBalance(updatedBalance);
        saveBalance(updatedBalance);

        

        reference.set(updatedTransactions)
        .then(() => {
          console.log('Data has been set successfully');
        })
        .catch((error) => {
          console.error('Error setting data:', error);
        });
        
    
    };

    // const sendTransactionDataToAPI = (transactionData, type) => {
    //     const endpoint = type === 'Income' ? 'income' : 'expense'; // Choose the appropriate endpoint based on transaction type
    //     axios.post(`http://your-flask-api-endpoint.com/api/transactions/${endpoint}`, transactionData)
    //         .then(response => {
    //             console.log(`${type} data sent to API:`, response.data);
    //         })
    //         .catch(error => {
    //             console.error(`Error sending ${type} data to API:`, error);
    //         });
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
                        saveTransactions(updatedTransactions);

                        reference.set(updatedTransactions)
                            .then(() => {
                            console.log('Data has been set successfully');
                            })
                            .catch((error) => {
                            console.error('Error setting data:', error);
                            });
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
