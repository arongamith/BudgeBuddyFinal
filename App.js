import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './components/NavTab';
import { Login, SignUp, WelcomeScreen, AddTransaction, UserProfile, ConfirmEmail, ForgotPassword, ResetPassword} from './screens/Index';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



export default function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>

          <Stack.Screen 
            name='HomeScreen'
            component={Tabs}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name='WelcomeScreen'
            component={WelcomeScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name='AddTransaction'
            component={AddTransaction}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name ='UserProfile'
            component={UserProfile}
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
        </Stack.Navigator>
    </NavigationContainer>
  );

  
};


