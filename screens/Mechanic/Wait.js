import React, { useState } from "react";
import { Button } from "react-native";
import { View, StyleSheet,Image, Text, SafeAreaView,TouchableOpacity, TextInput } from "react-native";



export default Wait = ({navigation})  => {
    return (
      
      <SafeAreaView style={styles.container}>
          <View> 
          </View> 
          <Text style={styles.TextCenter}>
            รอการยืนยันตัวตนจากระบบภายใน 24 ชั่วโมง
          </Text>
          <TouchableOpacity style={styles.cfButton} onPress={()=>navigation.navigate('Login')}>
                <Text style={{textAlign:"center" ,paddingVertical:10} } >CONFIRM</Text>
          </TouchableOpacity>
      </SafeAreaView>
      
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6E4E4',

    },
    cfButton:{
      width:180,
      height:40,
      marginLeft:120,
      marginTop:20,
      backgroundColor:"#FF0F00",
      borderRadius:25,
    },
    TextCenter:{
      marginTop:230,
      marginLeft:40,
      fontSize :18,
      
    }

    

  });