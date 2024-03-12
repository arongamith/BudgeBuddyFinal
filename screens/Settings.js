import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

const Settings = ( { navigation } ) => {
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

        <TouchableOpacity style={styles.tile} onPress={()=> navigation.navigate('LogOut')}>
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
    backgroundColor: '#F2F2F2',
    alignItems: 'center'
  },

  firstLayer:{
    right: 100,
    paddingHorizontal: 24,
    marginBottom: 12,
    paddingTop: 20,
    
    
  },

  title:{
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 7,
    
  },

  optionsContainer:{
    width: '85%',
    height: '30%',
    marginTop: 40,
    
    
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