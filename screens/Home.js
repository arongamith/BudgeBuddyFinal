import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView, Fla} from 'react-native';
import AddTransaction from './AddTransaction';


import Record from '../components/Record';



const Home = ({ navigation }) => {
   
    const [records,setRecords] = useState([
        {
            title: "Record 1",
            value: "20000",
        },
        {
            title: "Record 2",
            value: "30000",
        },
        {
            title: "Record 3",
            value: "30000",
        },{
            title: "Record 4",
            value: "30000",
        }
    ]);
        
  return (
    <SafeAreaView style={styles.container}>
        
       {/* Top Area View with the Page Name and User Picture*/} 
        <View style={styles.firstLayer}>
            <Text style={styles.title}>Home</Text>
            <TouchableOpacity>
                <Image 
                    source={require('../assets/icons/stockUser.png')}
                    resizeMode="contain"
                    style={{
                    width: 60,
                    height: 60,
                    left: 190
                    }}
                />
            </TouchableOpacity>
        </View>

        {/* Balance View Area */}
        <TouchableOpacity style={styles.balanceContainer}>
        <View style={styles.balance}>
            <Text style={{color: '#FFFFFF', fontSize: 40, fontWeight: '700', paddingLeft: 20, position: 'absolute'}}>Rs: 20,000</Text>
            <Text style={{color: 'rgba(255,255,255,0.4)', fontSize: 20, fontWeight: '700', right: 30, bottom: 30, position: 'absolute'}}>LKR</Text>
        </View>
        </TouchableOpacity>

        {/* Select Income or Expences to Display Area */}
        <View style={styles.middleLayer}>
            <TouchableOpacity style={styles.leftButtons}>
                <Text style={styles.buttonText}>Income</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.leftButtons}>
                <Text style={styles.buttonText}>Expenses</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightButton}>
                <Text style={styles.buttonText}>View All</Text>
            </TouchableOpacity>
        </View>

        {/* transactions viewving area */}
        <ScrollView 
        contentContainerStyle={styles.transactionView}
        >
            {records.map((data) => {
                return(
                    <Record 
                title={data.title}
                value={data.value}/>
                )
            })}
        </ScrollView>
        
    
        {/* Adding Button */}
        <TouchableOpacity style={styles.addingButton} onPress={()=>navigation.navigate('AddTransaction')}>
        <Image 
            source={require('../assets/icons/plusButton.png')}
            resizeMode="contain"
            style={{
            width: 60,
            height: 60,
            }}/>
        </TouchableOpacity>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#f2f2f2',
        marginBottom: 90

    },
    firstLayer:{
        
        flexDirection: 'row',
        paddingHorizontal: 24,
        marginBottom: 12,
        paddingTop: 20,
        
    },
    title:{
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 7
    },
    userImage:{
        width: 70,
        height: 70,
        marginLeft: 190,
        alignItems: 'center'

    },
    balanceContainer:{
        alignSelf: 'center',
        marginTop: 20,
        
    },
    balance:{
        width: 320,
        height: 150,
        borderRadius: 20,
        backgroundColor: '#1d1d1d',
        flexDirection: 'row',
        alignItems: 'center', 
    },
    middleLayer:{
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 10
        
    },
    leftButtons:{
        width: 80,
        height: 35,
        borderRadius: 27,
        backgroundColor: 'rgba(201,201,201,0.4)',
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center' 
    },
    rightButton:{
        width: 80,
        height: 35,
        borderRadius: 27,
        marginLeft: 90,
        backgroundColor: 'rgba(201,201,201,0.4)',
        alignItems: 'center',
        justifyContent: 'center'    
    },
    buttonText:{
        color: '#909090',
        fontWeight: '700'
    },
    addingButton:{
        width: 60,
        height: 60,
        borderRadius: 100,
        position: 'absolute',
        right: 30,
        bottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0B0C11'
    },
    transactionView:{ 
        alignItems: 'center',
        flexGrow: 1,   
    }
})

export default Home;