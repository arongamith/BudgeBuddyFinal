import React,{useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { BarChartComponent, SwitchTab } from './Index';




  


const Stats = () => {

  const [allStates] = useState(['Income', 'Expense']);
  const [switchState, setSwitchState] = useState(allStates[0])
  

  const onIncomeSwitch = ()=> {
    
  }

  const onExpenseSwtich= ()=> {
    console.warn("Expense")
  }
  

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [89, 30, 70, 60, 45, 78, 66, 77, 55, 70, 56, 80],
        colors:[
          (opacity = 1)=> "#25277f",
          (opacity = 1)=> "#25277f",
          (opacity = 1)=> "#25277f",
          (opacity = 1)=> "#25277f",
          (opacity = 1)=> "#25277f",
          (opacity = 1)=> "#25277f",
          (opacity = 1)=> "#25277f",
          (opacity = 1)=> "#25277f",
          (opacity = 1)=> "#25277f",
          (opacity = 1)=> "#25277f",
          (opacity = 1)=> "#25277f",
          (opacity = 1)=> "#25277f",

        ]
      }
    ]
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstLayer}>
        <Text style={styles.title}>Stats</Text>
      </View>
      <View style={styles.swtichSelectorContainer}>
        <SwitchTab
        allStates={allStates}
        switchState={switchState}
        setSwitchState={setSwitchState}
        />
      </View>
      <View style={styles.barChartContainer}>
        <BarChartComponent
        data={chartData}
        />
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
    justifyContent: 'center',
    alignSelf: 'center',
  },
  swtichSelectorContainer:{
    paddingVertical: 40
  }
})


export default Stats;