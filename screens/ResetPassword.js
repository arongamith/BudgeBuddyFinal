import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import React, {useState} from 'react'
import { CustomButton, CustomInput } from './Index'
import {useForm} from 'react-hook-form'

const ResetPassword = ( {navigation} ) => {

  const {control, handleSubmit} = useForm();

  const onSubmit = (data)=> {
    console.log(data);
    // Validate Submission
    navigation.navigate("Login")
  }



  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Reset Password</Text>
      </View>

      <CustomInput
      name={"code"}
      control={control}
      placeholder={"Code"}
      rules={{
        required: "Validation Code is Required"
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

      <CustomButton
      title={"Submit"}
      onPress={handleSubmit(onSubmit)}
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

export default ResetPassword