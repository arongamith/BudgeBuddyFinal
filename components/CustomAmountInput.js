import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import {Controller} from 'react-hook-form'

const CustomAmountInput = ({control, name, rules={}, placeholder, keyboardType }) => {
  return (
    
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState: {error}})=> (
                <>
                    <View style={[styles.container, {borderColor: error ? 'red': '#ffffff'}]}>
                        <TextInput 
                            value={value} 
                            onChangeText={onChange} 
                            onBlur={onBlur} 
                            placeholder= {placeholder}
                            keyboardType={keyboardType}
                            
                        />
                    </View>
                    {error && (
                    <Text style={{color: "red",}}>{error.message || "Error"}</Text>)}
                </>
            )}
        />
     
    );
};

const styles = StyleSheet.create({
    container:{
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
    input:{


    },
})

export default CustomAmountInput