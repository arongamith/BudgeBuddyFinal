import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home,Goals,Settings,Stats, AddTransaction} from '../screens/Index'






const Tab = createBottomTabNavigator();


const Tabs = () => {

  return (
   
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            unmountOnBlur: true,
            tabBarStyle: {
              position: 'absolute',
              backgroundColor: '#FFFFFF',
              height: '10%',
              width: "100%",
            },
            
          }}
        >
          <Tab.Screen // Home Screen Tab
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                  <Image
                    source={require('../assets/icons/home.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#1d1d1d' : '#748c94',
                    }}
                  />
                  <Text style={{ color: focused ? '#1d1d1d' : '#748c94', fontSize: 11 }}>HOME</Text>
                </View>
              ),
            }}
          />

          <Tab.Screen // Goal Screen Tab
            name="Goals"
            component={Goals}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                  <Image
                    source={require('../assets/icons/goal.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#1d1d1d' : '#748c94',
                    }}
                  />
                  <Text style={{ color: focused ? '#1d1d1d' : '#748c94', fontSize: 11 }}>GOALS</Text>
                </View>
              ),
            }}
          />

          <Tab.Screen // Stats Screen Tab
            name="Stats"
            component={Stats}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                  <Image
                    source={require('../assets/icons/bar-chart.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#1d1d1d' : '#748c94',
                    }}
                  />
                  <Text style={{ color: focused ? '#1d1d1d' : '#748c94', fontSize: 11 }}>STATS</Text>
                </View>
              ),
            }}
          />

          <Tab.Screen // Settings Screen Tab
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, }}>
                  <Image
                    source={require('../assets/icons/settings.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#1d1d1d' : '#748c94',
                    }}
                  />
                  <Text style={{ color: focused ? '#1d1d1d' : '#748c94', fontSize: 11 }}>SETTINGS</Text>
                </View>
              ),
            }}
          />
          
        </Tab.Navigator>
      
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#0B0C11',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
});

export default Tabs;
