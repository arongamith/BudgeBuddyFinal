import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


const Record = ({type,category,amount, onDelete}) => {

  const sign = type === 'Income' ? '+' : '-';
  const windowWidth = Dimensions.get('window').width;

  return (
    <TouchableOpacity style={styles.shadow} onLongPress={onDelete}>
      <LinearGradient 
      colors={['#ffffff','#ffffff','#ffffff']}
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
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    record:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        width: Dimensions.get('window').width-50,
        height: 80,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginLeft: "1%",
        marginTop: "2%",
        borderRadius: 20,
        
        
    },
    categoryText:{
      color: '#000000',
      fontWeight: '500',
      fontSize: 20
    },
    amountText:{
      color: '#000000',
      fontSize: 20,
      fontWeight: '500',
    },

    shadow:{
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      
    }
    
})

export default Record;