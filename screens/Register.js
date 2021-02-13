import React, { useState } from "react";
import { Button } from "react-native";
import { View, StyleSheet,Image, Text, SafeAreaView,TouchableOpacity, TextInput } from "react-native";



export default Register = ({navigation})  => {
    return (
      <SafeAreaView style={styles.container}>  
        <View>
      <Text style={styles.title}>
        เลือกประเภทการสมัคร
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="ผู้ใช้งาน"
          onPress={()=>navigation.navigate('User')}/>
        <Button
          title="ช่างยนต์"
          onPress={()=>navigation.navigate('Mechanic')}/>
      </View>
    </View>
  </SafeAreaView>
);
    }
      

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6E4E4',
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
      marginTop:300,
      height:40,
      fontSize :22,
      
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft:90,
      marginRight:90,
      marginTop:10,
      height:40,
      fontSize :20,
    },
   

  });