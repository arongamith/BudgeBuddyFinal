import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const BudgetPlan = ({ route }) => {
  const { title, amount, date } = route.params;
  const [budgetData, setBudgetData] = useState(null);

  useEffect(() => {
    // Function to fetch data from Flask API
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_FLASK_API_ENDPOINT_HERE');
        // Assuming the response.data is the data you want to display
        setBudgetData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when component mounts
    fetchData();

    // Clean-up function
    return () => {
      // Any clean-up code can go here
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <View>
      <Text>BudgetPlan</Text>
      <Text>Title: {title}</Text>
      <Text>Amount: {amount}</Text>
      <Text>Date: {date}</Text>
      {budgetData && (
        <View>
          <Text>Budget Data from Flask API:</Text>
          {/* Render your fetched data here */}
          <Text>{JSON.stringify(budgetData)}</Text>
        </View>
      )}
    </View>
  );
};

export default BudgetPlan;
