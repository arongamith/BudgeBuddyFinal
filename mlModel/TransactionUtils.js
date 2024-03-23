import React from 'react';
import { useTransactions } from '../context/TransactionContext';

const TransactionUtils = () => {
  const { transactions } = useTransactions();

  // Filter transactions into two separate arrays: income and expenses
  const incomeTransactions = transactions.filter(transaction => transaction.type === 'Income');
  const expenseTransactions = transactions.filter(transaction => transaction.type === 'Expense');

  console.log('Income Transactions:', incomeTransactions);
  console.log('Expense Transactions:', expenseTransactions);

  return { incomeTransactions, expenseTransactions };
};

export default TransactionUtils;
