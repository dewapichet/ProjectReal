import React, { useState } from "react";
import { Button } from "react-native";
import { View, StyleSheet,Image, Text, SafeAreaView,TouchableOpacity, TextInput } from "react-native";



export default Register = ({navigation})  => {
    return (
      <SafeAreaView style={styles.container}>  
        
        <Text style={styles.TitleName}>Register</Text>
           <TouchableOpacity style={styles.Search} onPress={()=>navigation.navigate('User')}>
                <Text style={{textAlign:"center" ,paddingVertical:10}} >ผู้ใช้งาน</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Logout} onPress={()=>navigation.navigate('Mechanic')}>
                <Text style={{textAlign:"center" ,paddingVertical:10} } >ช่าง</Text>
            </TouchableOpacity>
      </SafeAreaView>
      
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6E4E4',
    },
    Search:{
      width:300,
      height:40,
      marginLeft:60,
      marginTop:500,
      backgroundColor:"#8F7070",
      borderRadius:25,
    },
      Logout:{
        width:180,
        height:40,
        marginLeft:120,
        marginTop:10,
        backgroundColor:"#FF0F00",
        borderRadius:25,
    },
   

  });