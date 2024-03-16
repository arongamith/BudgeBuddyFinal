import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { BarChartComponent, SwitchTab } from './Index';
import { useTransactions } from '../context/TransactionContext';

const Stats = () => {
  const { transactions } = useTransactions();
  const [transactionStates] = useState(['Income', 'Expense']);
  const [dateState] = useState(['Weekly', 'Monthly', 'Yearly']);
  const [type, setSwitchType] = useState(transactionStates[0]);
  const [time, setSwitchTime] = useState(dateState[0]);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    generateChartData();
  }, [transactions, type, time]);

  const generateChartData = () => {
    const filteredTransactions = transactions.filter(
      (transaction) => transaction.type === type
    );

    const data = {}; // Object to store total amounts for each time period

    filteredTransactions.forEach((transaction) => {
      const date = new Date(); // Use actual transaction date 
      let key = '';
      if (time === 'Weekly') {
        const weekNumber = getWeekNumber(date);
        key = `Week ${weekNumber}`;
      } else if (time === 'Monthly') {
        key = `${date.getMonth() + 1}/${date.getFullYear()}`;
      } else if (time === 'Yearly') {
        key = date.getFullYear().toString();
      }

      if (!data[key]) {
        data[key] = 0;
      }

      data[key] += parseFloat(transaction.amount);
    });

    // Convert data object to chart data format
    const labels = Object.keys(data);
    const datasets = [
      {
        data: labels.map((label) => data[label]),
        colors: labels.map(() => (opacity = 1) => '#25277f'),
      },
    ];

    setChartData({ labels, datasets });
  };

  const getWeekNumber = (date) => {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const millisecondsInDay = 86400000;
    return Math.ceil(((date - oneJan) / millisecondsInDay + oneJan.getDay() + 1) / 7);
  };

  const onIncomeSwitch = () => {
    setSwitchType('Income');
  };

  const onExpenseSwitch = () => {
    setSwitchType('Expense');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstLayer}>
        <Text style={styles.title}>Stats</Text>
      </View>
      <View style={styles.swtichSelectorContainer}>
        <SwitchTab
          allStates={dateState}
          switchState={time}
          setSwitchState={setSwitchTime}
        />
      </View>
      {chartData && (
        <View style={styles.barChartContainer}>
          <BarChartComponent data={chartData} />
        </View>
      )}
      <View style={styles.swtichSelectorContainer}>
        <SwitchTab
          allStates={transactionStates}
          switchState={type}
          setSwitchState={setSwitchType}
          onIncomeSwitch={onIncomeSwitch}
          onExpenseSwitch={onExpenseSwitch}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginBottom: 90,
  },
  firstLayer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 12,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 7,
  },
  barChartContainer: {
    
    alignSelf: 'center',
  },
  swtichSelectorContainer: {
    paddingVertical: 40,
  },
});

export default Stats;
