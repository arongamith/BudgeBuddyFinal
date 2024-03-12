import React, {useState} from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import {useForm} from 'react-hook-form';
import { CustomInput,CustomAmountInput, CustomButton } from './Index';





const AddTransaction = ({ navigation }) => {

  const {control, handleSubmit} = useForm();

  const [category, setCategory] = useState();
  const [amount, setAmount] = useState();

  const onCreateCategory = async()=> {
    
  }



  const onAddTransaction = (data)=> {
    
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

      <TextInput
        placeholder='Category'
        style={styles.input}
        onChangeText={(value)=>setCategory(value)}
      />



      <TextInput
        placeholder='Amount'
        style={styles.input}
        keyboardType='numeric'
        onChangeText={(value)=>setAmount(value)}
      />

      <TouchableOpacity 
      style={styles.button}
      disabled={!category || !amount}
      >
        <Text>Add Transaction</Text>
      </TouchableOpacity>

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
    backgroundColor: '#ffffff',
        width: '80%',
        height:'7%',
        borderColor: "#E8E8E8",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        marginVertical: 10
  },
  button:{
    paddingVertical: 15,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d5d1d1',
    width: '80%',
    marginVertical: 8,
    borderRadius: 40,
    top: 10,
}
})




export default AddTransaction;