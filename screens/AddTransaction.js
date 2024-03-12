import React, {useState} from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import {useForm} from 'react-hook-form';
import { CustomAmountInput, CustomButton } from './Index';




const AddTransaction = ({ navigation }) => {

  const {control, handleSubmit} = useForm();

  const onAddTransaction = (data)=> {
    console.warn(data)
  }
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Go Back Button */}
      <TouchableOpacity style={styles.goBackButton} onPress={ ()=> navigation.navigate('HomeScreen') }>
          <Image
          source={require('../assets/icons/backButton.png')}
          resizeMode='contain'
          style={{
            width: 20,
            height: 20,
          }}
          />  
      </TouchableOpacity>
      
      {/* Title View */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add a Transaction</Text>
      </View>
      
      {/* Input Area */}
      <CustomAmountInput
      name={"Amount"}
      control={control}
      placeholder={"Amount"}
      keyboardType={"numeric"}
      rules={{
        required: "Amount is required"
      }}
      />

      <CustomButton
      title={"Add transaction"}
      onPress={handleSubmit(onAddTransaction)}
      />

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center'
  },
  goBackButton:{
    width: 80,
    height: 35,
    borderRadius: 27,
    backgroundColor: 'rgba(201,201,201,0.4)',
    right: 130,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  titleContainer:{
    left: 10,
    marginVertical: 20
  },
  title:{
    fontSize: 25,
    fontWeight: "700",
    color: "#2b2a2a"
  },
  input:{

  },
})




export default AddTransaction;