import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import React, {useState} from 'react'
import { CustomButton, CustomInput } from './Index'
import {useForm} from 'react-hook-form'

const SignUp = ( {navigation} ) => {

  const {control, handleSubmit} = useForm();

  const onConfirm = (data)=> {
    console.log(data);
    // Validate Confirmation
    navigation.navigate("Login");
  };

  const onResendCode = () => {
    // Write the logic to Resend a code to email
    console.warn("Resend Code");
  };
  


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Confirm Email</Text>
      </View>

      <CustomInput
      name={"code"}
      control={control}
      placeholder={"Enter the Code"}
      rules={{
        required: "Confirmation Code is Required"
      }}
      />

      <CustomButton
      title={"Confirm"}
      onPress={handleSubmit(onConfirm)}
      />

      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity 
        style={{top: 30, marginRight: 40}}
        onPress={onResendCode}
        >
            <Text style={{color: "#FFFFFF", fontWeight: '500'}}>Resend Code</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={{top: 30, marginLeft: 40}}
        onPress={()=> navigation.navigate("SignUp")}
        >
            <Text style={{color: "#FFFFFF", fontWeight: '500'}}>Back to Sign Up</Text>
        </TouchableOpacity>

      </View>

      
    

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: "#2F415B",
      alignItems: "center",
      justifyContent: "center",

  },
  titleContainer:{
      flexDirection: "row",
      alignItems: "center",
      top: 1,
      marginBottom: 10
      
  },
  title:{
      fontWeight: "500",
      fontSize: 50,
      color: "#fff",
  },
  rectanglesContainer:{
      flexDirection: "row",
      marginLeft: 10,
  },
  rectangle:{
      width: 10,
      height: 38,
      marginRight: 3,
  },
  

})

export default SignUp