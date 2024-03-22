import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import React, {useState} from 'react'
import { CustomButton, CustomInput } from './Index'
import {useForm} from 'react-hook-form'
import auth from '@react-native-firebase/auth';


const SignUp = ( {navigation} ) => {

  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');

  const onRegister = async (data)=> {
    

    if (data.password !== data.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
  
    try {
      await auth().createUserWithEmailAndPassword(data.email, data.password);
      console.log('User account created & signed in!');
      // Add navigation logic or any other actions you need after successful registration
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      } else {
        console.error(error);
      }
    }
  };

  const onLoginGoogle = () => {
    console.warn("Login with Google")
  };

  


  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity style={styles.goBackButton} onPress={ ()=> navigation.navigate('WelcomeScreen') }>
          <Image
          source={require('../assets/icons/backButton.png')}
          resizeMode='contain'
          style={{
            width: 20,
            height: 20,
          }}
          />  
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>BudgeBuddy</Text>
        <View style={styles.rectanglesContainer}>
          <View style={styles.rectangle} backgroundColor="#71B2F3" />
          <View style={styles.rectangle} backgroundColor="#5A8FC4" />
          <View style={styles.rectangle} backgroundColor="#446D95" />
        </View>
      </View>

      
      <CustomInput
      name={"email"}
      placeholder={"Email"}
      control={control}
      rules={{
        required: "Email is Required",
        pattern: {
          value: EMAIL_REGEX,
          message: "Email is Invalid"
        }
      }}

      />
      <CustomInput
      name={"password"}
      placeholder={"Password"}
      control={control}
      secureTextEntry={true}
      rules={{
        required: 'Password is Required',
        minLength: {
          value: 6,
          message: "Password should be minimum of 6 characters"
        },
        maxLength: {
          value: 24,
          message: "Password should not be more than 24 characters"
        }
      }}
      />
      <CustomInput
      name={"confirmPassword"}
      placeholder={"Confirm Password"}
      control={control}
      secureTextEntry={true}
      rules={{
        validate: value => value === pwd || "Password does not match"
      }}
      />

      <CustomButton
      title={"Register"}
      onPress={handleSubmit(onRegister)}
      />

<TouchableOpacity 
      style={{alignItems: 'center'}}
      onPress={onLoginGoogle}
      >
        <Image
          source={require("../assets/icons/Google_Icons-09-512.webp")}
          resizeMode='contain'
          style={{
            height: 100,
            width: 100,
            top: 50,
          }}
        />
        <Text style={{color: "#FFFFFF", top: 50,fontWeight: '500'}}>Log In with Google</Text>
      </TouchableOpacity>


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
      top: 1
      
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
  goBackButton:{
    width: 80,
    height: 35,
    borderRadius: 27,
    backgroundColor: 'rgba(201,201,201,0.4)',
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center', 
    position: 'absolute',
    left: 1,
    top: 70
},

})

export default SignUp