import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,TouchableOpacity, Text,Button, View,SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import WaitScreen from './screens/Wait';
import ConfirmScreen from './screens/Confirm'
import HomeScreen from './screens/Home'
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
        name="Home"
        component={HomeScreen}
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
