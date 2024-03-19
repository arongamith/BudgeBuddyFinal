import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import Record from '../components/Record';
import {SwitchTab} from './Index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTransactions } from '../context/TransactionContext';
import LinearGradient from 'react-native-linear-gradient';




const Home = ({ navigation }) => {

   
    const [allStates] = useState(['Income', 'Expense', 'All']);
    const [switchState, setSwitchState] = useState(allStates[2])
    const { transactions, balance, deleteTransaction, setTransactions } = useTransactions(0);

    useEffect(() => {
        loadTransactions();
    }, []);

    const loadTransactions = async () => {
        try {
            const storedTransactions = await AsyncStorage.getItem('transactions');
            if (storedTransactions !== null) {
                setTransactions(JSON.parse(storedTransactions));
            }
        } catch (error) {
            console.error('Error loading transactions:', error);
        }
    };

    const saveTransactions = async (updatedTransactions) => {
        try {
            await AsyncStorage.setItem('transactions', JSON.stringify(updatedTransactions));
        } catch (error) {
            console.error('Error saving transactions:', error);
        }
    };

    // Whenever transactions state changes, save it to AsyncStorage
    useEffect(() => {
        saveTransactions(transactions);
    }, [transactions]);

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
                    width: 50,
                    height: 50,
                    
                    }}
                />
            </TouchableOpacity>
        </View>

        {/* Balance View Area */}
        
        <LinearGradient 
            colors={['#2c3763','#2c3763']}
            style={styles.balance}>
                <Text style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: 15, fontWeight: '700', position: 'absolute'}}>Balance</Text>
            <Text style={{color: '#ffffff', fontSize: 50, fontWeight: '500', position: 'absolute', paddingTop: 30}}>Rs: {balance}</Text>
            <Text style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: 15, fontWeight: '700', right: 30, bottom: 30, position: 'absolute'}}>LKR</Text>
        </LinearGradient>
        

        {/* Select Income or Expences to Display Area */}
        <View style={styles.secondLayer}>
            <Text style={{paddingLeft: 20,paddingTop: 20, fontWeight: '700', fontSize: 18, color: '#000000'}}>Transactions</Text>

            {/* Swtich Selector */}
            <View style={styles.middleLayer}>
                <SwitchTab
                    allStates={allStates}
                    switchState={switchState}
                    setSwitchState={setSwitchState}
                />
            </View>


            {/* transactions viewving area */}
            <FlatList
                data={filteredTransactions}
                renderItem={({ item, index }) => (
                    <Record
                    type={item.type}
                    category={item.category}
                    amount={item.amount}
                    onDelete={() => deleteTransaction(index)}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.transactionView}
                alwaysBounceVertical={true}
                showsVerticalScrollIndicator={false}
            />
            
        
            {/* Adding Button */}
            <LinearGradient 
                colors={['#000000','#121315','#626161']}
                style={styles.addingButton} 
            >
                <TouchableOpacity 
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
            </LinearGradient>
        </View>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#2c3763',
        marginBottom: 70

    },
    firstLayer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 12,
        paddingTop: 20,
        paddingHorizontal: 20
        
        
    },

    secondLayer: {
        borderWidth: 1,
        borderColor: '#000000',
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 20,
        backgroundColor: '#C4C5DA',
        
        
    },
    title:{
        fontSize: 32,
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: 7
    },
    
    balance:{
        width: 320,
        height: 150,
        alignItems: 'center',
        alignSelf: 'center', 
    
    },
    middleLayer:{
        marginTop: 35,
        marginBottom: 10
    },
    buttonText:{
        color: '#909090',
        fontWeight: '700'
    },
    addingButton:{
        width: 50,
        height: 50,
        borderRadius: 100,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2b3359',
        opacity: 1,
        right: 20,
        top: 10
        
    },
    transactionView:{ 
        alignItems: 'center',
        paddingBottom: 40,
    }
})

export default Home;