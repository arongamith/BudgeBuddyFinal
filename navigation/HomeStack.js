import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AddTransaction, Home, Login, Tabs, UserProfile, AuthStack } from '../screens/Index';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    
        <Stack.Navigator initialRouteName='Home'>

          <Stack.Screen 
          name='HomeScreen'
          component={Tabs}
          options={{headerShown: false}}
          />

          <Stack.Screen
          name='AddTransaction'
          component={AddTransaction}
          options={{headerShown: false}}
          />

          <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{headerShown: false}}
          />

          <Stack.Screen
            name="LogOut"
            component={AuthStack}
            options={{headerShown: false}}
          />

          
        </Stack.Navigator>
    
  )
}

export default HomeStack;