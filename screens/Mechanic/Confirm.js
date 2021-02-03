import React, { useState } from "react";
import { Button } from "react-native";
import { View, StyleSheet,Image, Text, SafeAreaView,TouchableOpacity, TextInput } from "react-native";



export default Confirm = ({navigation})  => {
    return (
      
      <SafeAreaView style={styles.container}>  
          <Text style={styles.TextTitle}>
            ยืนยันตัวตนของช่าง
          </Text>
          <TouchableOpacity style={styles.ccButton} onPress={()=>navigation.navigate('Register')}>
                <Text style={{textAlign:"center" ,paddingVertical:10}} >CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cfButton} onPress={()=>navigation.navigate('Wait')}>
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
    ccButton:{
      width:180,
      height:40,
      marginLeft:120,
      marginTop:10,
      backgroundColor:"#8F7070",
      borderRadius:25,
    },
    cfButton:{
      width:180,
      height:40,
      marginLeft:120,
      marginTop:10,
      backgroundColor:"#FF0F00",
      borderRadius:25,
    },
    TextTitle:{
      marginTop:20,
      marginLeft:130,
      fontSize :18,
    }
    

  });
  
