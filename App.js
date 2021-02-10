import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,TouchableOpacity, Text,Button, View,SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/Login';
import WaitScreen from './screens/Mechanic/Wait';
import ConfirmScreen from './screens/Mechanic/Confirm';
import HomeUserScreen from './screens/User/HomeUser';
import SearchScreen from './screens/User/Search';
import Mechanic from './screens/Mechanic';
import User from './screens/User';
import RegisterScreen from './screens/Register';


const Stack = createStackNavigator();
const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
    screenOptions ={
    {
      headerStyle:{
        backgroundColor:'white',
        shadowOpacity: 0
      },
      headerTintColor:'black'
    }
  
  }
  >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={
          {
           headerShown :false
          }
}
        />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={
          {
           title:null
          }
}
        />
        <Stack.Screen
        name="Confirm"
        component={ConfirmScreen}
        options={
          {
           title:null
          }
}
        />
        <Stack.Screen
        name="Wait"
        component={WaitScreen}
        options={
          {
           title:null
          }
}
        />
        <Stack.Screen
        name="HomeUser"
        component={HomeUserScreen}
        options={
          {
           title:null
          }
}
        />
        <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={
          {
           title:null
          }
}
        />
        <Stack.Screen
        name="Mechanic"
        component={Mechanic}
        options={
          {
           title:null
          }
}
        />
        <Stack.Screen
        name="User"
        component={User}
        options={
          {
           title:null
          }
}
        />
        
        


      
    </Stack.Navigator>
  </NavigationContainer>
)



export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
