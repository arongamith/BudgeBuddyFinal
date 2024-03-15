import { View, Text } from 'react-native';
import React, {useState} from 'react';
import { MultiSwitch } from 'react-native-multiswitch-selector';






const SwitchTab = ({allStates, switchState, setSwitchState}) => {


  return (
    <View>
    <MultiSwitch
      allStates={allStates}
      currentState={switchState}
      changeState={setSwitchState}
      // mode={'white'}
      styleActiveStateGradient={['#466ac5', '#23308e']}
      styleActiveStateText={{
        fontSize: 15,
        fontWeight: '700'
      }}
      styleRoot={{
        width: 300,
        alignSelf: 'center',
        backgroundColor: 'transparent'
      }}
    />
    </View>
  )
}

export default SwitchTab