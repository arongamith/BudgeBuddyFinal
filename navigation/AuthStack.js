import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {WelcomeScreen, SignUp,Login,ForgotPassword,ConfirmEmail,ResetPassword, HomeStack} from '../screens/Index'

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    
        <Stack.Navigator>

          <Stack.Screen
              name='WelcomeScreen'
              component={WelcomeScreen}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name ='SignUp'
              component={SignUp}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="ConfirmEmail"
              component={ConfirmEmail}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name='HomeStack'
              component={HomeStack}
              options={{headerShown: false}}
            />

        </Stack.Navigator>
    
  )
}

export default AuthStack