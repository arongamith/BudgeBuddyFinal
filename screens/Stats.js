import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { BarChartComponent } from './Index';




  


const Stats = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstLayer}>
        <Text style={styles.title}>Stats</Text>
      </View>
      <View style={styles.barChartContainer}>
        {/* <BarChartComponent
        /> */}
      </View>
  </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  container:{
      flex: 1,
      backgroundColor: '#f2f2f2',
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
  barChartContainer:{
    alignSelf: 'center',
    paddingVertical: 25
  }
})


export default Stats;