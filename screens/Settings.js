import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';

const Settings = ({ navigation }) => {
 const [newName, setNewName] = useState('');

 const handleNameChange = (name) => {
    setNewName(name);
 };

 const onPressLogOut = () => {
  
 }

 const handleSubmit = () => {
    // Update the user's name in your application's state or backend
    console.log('New name:', newName);
    // Optionally, navigate back or show a success message
    // navigation.goBack();
 };
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.firstLayer}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.optionsContainer}>

        <TouchableOpacity style={styles.tile} onPress={() => {
          // Navigate to the 'UserProfile' screen
          navigation.navigate('UserProfile');
          // Optionally, show a modal or a separate screen for changing the name
        }}>
          <Text style={styles.tileText}>View Profile</Text>
        </TouchableOpacity>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            onChangeText={handleNameChange}
            value={newName}
            placeholder="Change your name"
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.tile}>
          <Text style={styles.tileText}>Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={onPressLogOut}>
          <Text style={styles.tileText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#cbd7f2',
    marginBottom: 90,
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

  optionsContainer:{
    width: '85%',
    height: '30%',
    marginTop: 40,
    alignSelf: 'center'
  },

  tile:{
    height: '20%',
    width: '100%',
    borderRadius: 10,
    margin: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(201,201,201,0.4)',
  },

  tileText: {
    color: '#909090',
    fontWeight: '700',
    position: 'absolute',
    left: 10
  }





})
