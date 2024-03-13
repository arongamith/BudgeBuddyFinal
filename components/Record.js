import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


const Record = (props) => {
  return (
    <View style={styles.record}>
        <Image 
        source={require('../assets/icons/GoogleLogoPNGImage.png')}
        resizeMode='contain'
        style={{
          height: "100%",
          width: "10%"
        }}/>
      <Text>{props.title}</Text>
      <Text>{props.value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    record:{
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems: "center",
        width: 350,
        height: 100,
        paddingVertical: 10,
        marginLeft: "1%",
        marginTop: "2%",
        borderRadius: 5,
        backgroundColor: "rgba(220, 217, 217, 0.4)",
    },
    
})

export default Record;