import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Settings = ( { navigation } ) => {

  const onPressLogOut = ()=> {

    Alert.alert(
      "Confirm",
      "Are you sure you want to Log Out ?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Log Out",
          onPress: () => navigation.navigate('LogOut')
        }
      ]
    );
  }


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.firstLayer}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.optionsContainer}>

        <TouchableOpacity style={styles.tile} onPress={()=>navigation.navigate('UserProfile')}>
          <Text style={styles.tileText}>View Profile</Text>
        </TouchableOpacity>
          
        <TouchableOpacity style={styles.tile}>
          <Text style={styles.tileText}>Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={onPressLogOut}>
          <Text style={styles.tileText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#cbd7f2',
    marginBottom: 90,
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

  optionsContainer:{
    width: '85%',
    height: '30%',
    marginTop: 40,
    alignSelf: 'center'
  },

  tile:{
    height: '20%',
    width: '100%',
    borderRadius: 10,
    margin: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(201,201,201,0.4)',
  },

  tileText: {
    color: '#909090',
    fontWeight: '700',
    position: 'absolute',
    left: 10
  }





})