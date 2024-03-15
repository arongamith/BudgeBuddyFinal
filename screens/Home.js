import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import Record from '../components/Record';
import {SwitchTab} from './Index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTransactions } from '../context/TransactionContext';
import LinearGradient from 'react-native-linear-gradient';




const Home = ({ navigation }) => {

   
    const [allStates] = useState(['Income', 'Expense', 'All']);
    const [switchState, setSwitchState] = useState(allStates[2])
    const { transactions, balance } = useTransactions();

    const filteredTransactions = switchState === 'All' ? transactions : transactions.filter(transaction => transaction.type === switchState);


    
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
                    
                    }}
                />
            </TouchableOpacity>
        </View>

        {/* Balance View Area */}
        <TouchableOpacity style={styles.balanceContainer}>
        <LinearGradient 
        colors={['#4562ab','#00144a']}
        style={styles.balance}>
            <Text style={{color: '#FFFFFF', fontSize: 40, fontWeight: '700', paddingLeft: 20, position: 'absolute'}}>Rs: {balance}</Text>
            <Text style={{color: 'rgba(255,255,255,0.4)', fontSize: 20, fontWeight: '700', right: 30, bottom: 30, position: 'absolute'}}>LKR</Text>
        </LinearGradient>
        </TouchableOpacity>

        {/* Select Income or Expences to Display Area */}
        <View style={styles.middleLayer}>
            <SwitchTab
            allStates={allStates}
            switchState={switchState}
            setSwitchState={setSwitchState}
            />
        </View>

        {/* transactions viewving area */}
        <ScrollView 
        contentContainerStyle={styles.transactionView}
        alwaysBounceVertical={true}
        >
            {filteredTransactions.map((transaction, index) => (
        <Record
          key={index}
          type={transaction.type}
          category={transaction.category}
          amount={transaction.amount} // Combine category and amount as value
        />
      ))}
        </ScrollView>
        
    
        {/* Adding Button */}
        <TouchableOpacity 
        style={styles.addingButton} 
        onPress={()=>navigation.navigate('AddTransaction')}
        
        >
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
        justifyContent:'space-between',
        marginBottom: 12,
        paddingTop: 20,
        paddingHorizontal: 20
        
        
    },
    title:{
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 7
    },
    
    balanceContainer:{
        alignSelf: 'center',
        marginTop: 20,
        
    },
    balance:{
        width: 320,
        height: 150,
        borderRadius: 20,
        backgroundColor: '#2f497d',
        flexDirection: 'row',
        alignItems: 'center', 
    },
    middleLayer:{
        marginTop: 40,
        marginBottom: 10
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
        backgroundColor: '#0B0C11',
        opacity: 0.2
    },
    transactionView:{ 
        alignItems: 'center',
        flexGrow: 1,   
    }
})

export default Home;