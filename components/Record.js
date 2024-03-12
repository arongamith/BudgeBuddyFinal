import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


const Record = (props) => {
  return (
    <View style={styles.record}>
        <Image 
        source={require('../assets/icons/GoogleLogoPNGImage.png')}
        resizeMode='contain'
        style={styles.recordImage}/>
      <Text>{props.title}</Text>
      <Text>{props.value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    record:{
        display:"flex",
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "80%",
        paddingVertical: 10,
        marginLeft: "1%",
        marginTop: "2%",
        borderRadius: 5,
        backgroundColor: "rgba(220, 217, 217, 0.4)",
    },
    recordImage:{
        width: 30,
        aspectRatio: 1,
    },
})

export default Record;