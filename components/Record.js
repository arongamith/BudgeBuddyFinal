import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


const Record = ({type,category,amount}) => {

  const sign = type === 'Income' ? '+' : '-';

  return (
    <LinearGradient 
    colors={['#000000','#3e3e3e']}
    style={styles.record}>
        {/* <Image 
        source={require('../assets/icons/GoogleLogoPNGImage.png')}
        resizeMode='contain'
        style={{
          height: "100%",
          width: "10%"
        }}/> */}
      <Text style={styles.categoryText}>{category}</Text>
      <Text style={styles.amountText}>{`${sign} ${amount}`}</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    record:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 350,
        height: 80,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginLeft: "1%",
        marginTop: "2%",
        borderRadius: 25,
        backgroundColor: "rgba(182, 207, 237, 0.4)",
    },
    categoryText:{
      color: '#FFFFFF',
      fontWeight: '500',
      fontSize: 20
    },
    amountText:{
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: '500',
    }
    
})

export default Record;