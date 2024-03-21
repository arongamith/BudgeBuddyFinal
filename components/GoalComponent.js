import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';






const GoalComponent = ({ title, date, amount, onDelete, navigation }) => {

 
  const handleDelete = () => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this goal?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => onDelete()
        }
      ]
    );
  };

  return (
    <TouchableOpacity onLongPress={handleDelete}>
      <LinearGradient
        colors={['#ffffff', '#ffffff', '#ffffff']}
        style={styles.goal}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitles}>Amount: Rs: {amount}</Text>
        <Text style={styles.subTitles}>Date of Achievement: {date}</Text>

        <TouchableOpacity style={styles.button} onPress={navigation}>
          <Text style={{ color: "#FFFFFF", fontWeight: '700' }}>Get a budget Plan</Text>
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goal: {
    width: Dimensions.get('window').width - 100,
    height: 200,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 10
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 20
  },
  subTitles: {
    paddingVertical: 8,
    fontWeight: '400'
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    width: 150,
    height: 40,
    marginTop: 15,
    backgroundColor: "#1d2075"
  },
  editDeleteButton:{  
  }
});

export default GoalComponent;
