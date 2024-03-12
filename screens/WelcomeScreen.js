import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'


const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>BudgeBuddy</Text>
        <View style={styles.rectanglesContainer}>
          <View style={styles.rectangle} backgroundColor="#71B2F3" />
          <View style={styles.rectangle} backgroundColor="#5A8FC4" />
          <View style={styles.rectangle} backgroundColor="#446D95" />
        </View>
      </View>
      <CustomButton
      title = "Lets Get Started"
      onPress={()=>navigation.navigate("SignUp")}
      />
      <View style={{position: 'absolute', bottom: 120, justifyContent: 'center', alignItems: 'center',}}>
        <Text style={{color: "#FFFFFF", marginBottom: 10}}>Already Signed in?</Text>
      </View>
      <TouchableOpacity style={{position: 'absolute', bottom: 100, justifyContent: 'center', alignItems: 'center',}} onPress={()=>navigation.navigate('Login')}>
        <Text style={{color: "#FFFFFF", fontWeight: '500'}}>Login Here</Text>
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
        position: 'absolute',
        top: 300
        
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
    }

})

export default WelcomeScreen