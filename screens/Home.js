import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, Image, ImageBackground} from 'react-native';
import AddTransaction from './AddTransaction';


import Record from '../components/Record';

import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
   } from "react-native-popup-menu";







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
            title: "Record 2",
            value: "30000",
        },{
            title: "Record 2",
            value: "30000",
        }]);
  return (
    <SafeAreaView style={styles.container}>
        
       {/* Top Area View with the Page Name and User Picture*/} 
        <View style={styles.firstLayer}>
            <Text style={styles.title}>Home</Text>
            <MenuProvider>
                <Menu>
                    <MenuTrigger>
                        <Image 
                                source={require('../assets/icons/stockUser.png')}
                                resizeMode="contain"
                                style={{
                                width: 60,
                                height: 60,
                                left: 190
                                }}
                            />
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption  onSelect={()=> navigation.navigate('UserProfile')}text="View Profile" />
                        <MenuOption  onSelect={()=> navigation.navigate('WelcomeScreen')} text="Log Out" />
                    </MenuOptions>
                </Menu>
            </MenuProvider>
        </View>

        {/* Balance View Area */}
        <TouchableOpacity style={styles.balanceContainer}>
        <View style={styles.balance}>
            <Text style={{color: '#FFFFFF', fontSize: 40, fontWeight: '700', paddingLeft: 20, position: 'absolute'}}>Rs: 10,000</Text>
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
        <ScrollView contentContainerStyle={styles.transactionView}>
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
        backgroundColor: '#F2F2F2'

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
        alignItems: 'center',
        marginTop: 20,
        
    },
    balance:{
        width: 320,
        height: 150,
        borderRadius: 40,
        backgroundColor: '#1d1d1d',
        flexDirection: 'row',
        alignItems: 'center', 
    },
    middleLayer:{
        flexDirection: 'row',
        marginTop: 40,
        
        
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
        borderWidth: 1,
        borderColor: 'black',
        position: 'absolute',
        right: 30,
        bottom: 120,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#0B0C11',
        shadowOffset: {
        width: 3,
        height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    transactionView:{
        marginTop: 30,
        alignItems: 'center'
        
    }


})

export default Home;