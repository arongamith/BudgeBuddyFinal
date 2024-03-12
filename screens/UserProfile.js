import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const UserProfile = ( { navigation } ) => {
  return (
    <SafeAreaView>
    {/* Go Back Button */}
    <TouchableOpacity style={styles.goBackButton} onPress={ ()=> navigation.navigate('Settings') }>
        <Image
        source={require('../assets/icons/backButton.png')}
        resizeMode='contain'
        style={{
          width: 20,
          height: 20,
        }}
        />   
    </TouchableOpacity>

  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    goBackButton:{
      width: 80,
      height: 35,
      borderRadius: 27,
      backgroundColor: 'rgba(201,201,201,0.4)',
      marginLeft: 20,
      alignItems: 'center',
      justifyContent: 'center' 
  },
  })

export default UserProfile