import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './components/NavTab';
import { HomeStack, AuthStack, Home} from './screens/Index';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



export default function App() {
  return(
    <NavigationContainer style={Styles.conatiner}>
        {/* <AuthStack/> */}
        <HomeStack/>
    </NavigationContainer>
  );

  
};


const Styles = StyleSheet.create({
    conatiner: {
      flex: 1
    }
})


