import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import { CustomButton, CustomInput } from './Index';
import {useForm} from 'react-hook-form';

const ForgotPassword = ( {navigation} ) => {

  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  const {control, handleSubmit} = useForm();

  const onSend = (data)=> {
    console.log(data);
    // Validate Send (Email Validation)
    navigation.navigate("ResetPassword")
  }

  
  


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Reset Password</Text>
      </View>

      <CustomInput
      name={"email"}
      placeholder={"Enter Your Email"}
      control={control}
      rules={{
        required: "Email is Required",
        pattern: {
          value: EMAIL_REGEX,
          message: "Email is Invalid"
        }
      }}
      
      />

      <CustomButton
      title={"Send"}
      onPress={handleSubmit(onSend)}
      />

      <View>

        
        <TouchableOpacity 
        style={{top: 30}}
        onPress={()=> navigation.navigate("Login")}
        >
            <Text style={{color: "#FFFFFF", fontWeight: '500'}}>Back to Login</Text>
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

export default ForgotPassword