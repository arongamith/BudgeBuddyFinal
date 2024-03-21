// BudgetPlan.js

import React from 'react';
import { View, Text } from 'react-native';

const BudgetPlan = ({ route }) => {
  // Extracting the parameters passed from the Goal component
  const { title, amount, date } = route.params;

  return (
    <View>
      <Text>BudgetPlan</Text>
      <Text>Title: {title}</Text>
      <Text>Amount: {amount}</Text>
      <Text>Date: {date}</Text>
    </View>
  );
};

export default BudgetPlan;
