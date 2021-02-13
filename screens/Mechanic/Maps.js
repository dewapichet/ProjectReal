import React, { useState } from "react";
import { Button } from "react-native";
import { View, StyleSheet,Image, Text, SafeAreaView,TouchableOpacity, TextInput } from "react-native";

export default Maps = ({navigation})  => {
    return (
      
      <SafeAreaView style={styles.container}>  
        
        <Text style={styles.TitleName}>Map</Text>
           
      </SafeAreaView>
      
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6E4E4',
    },
    
   

  });