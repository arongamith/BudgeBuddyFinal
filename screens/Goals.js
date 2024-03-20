import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, TextInput, ScrollView, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomButton, GoalComponent, AddGoal } from './Index';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Goal = ( {navigation} ) => {

  const [goals, setGoals] = useState([]);


  useEffect(() => {
    // Load goals from AsyncStorage when component mounts
    loadGoals();
  }, []);

  const loadGoals = async () => {
    try {
      const storedGoals = await AsyncStorage.getItem('goals');
      if (storedGoals !== null) {
        setGoals(JSON.parse(storedGoals));
      }
    } catch (error) {
      console.error('Error loading goals:', error);
    }
  };

  const saveGoals = async (updatedGoals) => {
    try {
      await AsyncStorage.setItem('goals', JSON.stringify(updatedGoals));
    } catch (error) {
      console.error('Error saving goals:', error);
    }
  };
  
  

  const handleAddGoal = () => {
    navigation.navigate("CreateGoal", { handleAddGoal: addGoalToList });
  };

  const addGoalToList = (newGoal) => {
    const updatedGoals = [...goals, newGoal];
    setGoals(updatedGoals);
    saveGoals(updatedGoals); // Save updated goals to AsyncStorage
  };

  const handleDeleteGoal = (index) => {
    const updatedGoals = [...goals]; // Create a copy of the goals array
    updatedGoals.splice(index, 1); // Remove the goal at the specified index
    setGoals(updatedGoals); // Update the state
    saveGoals(updatedGoals); 
  };

  const renderItem = ({ item }) => (
    <GoalComponent title={item.title} date={item.date} amount={item.amount} />
  );

  


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.firstLayer}>
        <Text style={styles.title}>Goals</Text>
      </View>

      <FlatList
        style={styles.goalListContainer}
        data={goals}
        renderItem={({ item, index }) => (
          <GoalComponent
            title={item.title}
            date={item.date}
            amount={item.amount}
            onDelete={() => handleDeleteGoal(index)} // Pass onDelete function here
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />

    <View style={styles.button}>
      <CustomButton 
      title={"Create a Goal"}
      onPress={handleAddGoal}
      />
    </View>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({

  container:{
      flex: 1,
      backgroundColor: '#C4C5DA',
  },
  firstLayer:{
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 12,
    paddingTop: 20,
    
  },
  title:{
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 7
  },
  button: {
    alignSelf: 'center',
    width: "50%",
    position: 'absolute',
    bottom: 100,
  },
  goalListContainer:{
    marginBottom: Dimensions.get('window').width - 270,
  }
})

export default Goal;