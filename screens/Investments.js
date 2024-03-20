import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const Investments = () => {
  return (
    <SafeAreaView style={styles.container}>


        <View>
            <Text style={styles.title}>Investments</Text>
        </View>

        



    </SafeAreaView>
  )
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        paddingLeft: 20,
        paddingTop: 20
        
    }
})

export default Investments