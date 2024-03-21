import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React,{ useState } from 'react'
import { SwitchTab } from './Index';

const Investments = () => {

  const [options] = useState(['Gold','Real Estate','Fixed Deposit']);
  const [investmentType, setInvestmentType] = useState(options[0]);
  

  return (
    <SafeAreaView style={styles.container}>


        <View style={styles.firstLayer}>
            <Text style={styles.title}>Investments</Text>
        </View>

      <View style={styles.swtichButton}>
        <SwitchTab
          allStates={options}
          switchState={investmentType}
          setSwitchState={setInvestmentType}
        />
      </View>


    </SafeAreaView>
  )
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C4C5DA',
    },

    firstLayer: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        marginBottom: 12,
        paddingTop: 20,
      },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 7,
        
    },
    swtichButton: {
      marginTop: 10
    }
})

export default Investments
