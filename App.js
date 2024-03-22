import React,{useState, useEffect} from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './components/NavTab';
import { HomeStack, AuthStack, Home} from './screens/Index';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';



const App = ()=> {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;



  return(
    <NavigationContainer style={Styles.conatiner}>
        {!user ? (
        <AuthStack setUser={setUser} />
      ) : (
        <HomeStack user={user} />
      )}
    </NavigationContainer>
  );

  
};


const Styles = StyleSheet.create({
    conatiner: {
      flex: 1
    }
})

export default App;

