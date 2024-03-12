import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, title}) => {
 
    

  return (
    <TouchableOpacity style={{...styles.button}} onPress={onPress}>
        <Text style={{fontSize: 18, fontWeight: '500', color: '#585757'}}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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

export default CustomButton