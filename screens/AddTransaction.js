import React, {useState} from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';




const AddTransaction = ({ navigation }) => {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};


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




export default AddTransaction;