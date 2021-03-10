import React, { useState } from "react";
import { Button } from "react-native";
import { View, StyleSheet,Image, Text, SafeAreaView,TouchableOpacity, TextInput } from "react-native";
import imgTitle from "../assets/TitleLogin.png"


export default Login = ({navigation})  => {
    return (
      
      <SafeAreaView style={styles.container}>  
          <Image source ={imgTitle} style={styles.image}></Image>
          <TextInput style={styles.IdInput} placeholder="ID" />
          <TextInput style={styles.PwInput} placeholder="PASSWORD" />
          <TouchableOpacity style={styles.LogButton} onPress={()=>navigation.navigate('HomeUser')} >
            <Text style={{textAlign:"center" ,paddingVertical:10}}>
              LOGIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.RegisButton} onPress={()=>navigation.navigate('Register')}>
            <Text style={{textAlign:"center" ,paddingVertical:10}}>
              REGISTER
            </Text>
          </TouchableOpacity>
      </SafeAreaView>
      
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6E4E4',

    },
    image: {
      
      width:300,
      height:200,
      marginTop:60,
      marginLeft:70
    },
    IdInput:{
      flex: 1,
      width:330,
      height:40,
      backgroundColor:"white",
      marginLeft:50,
      marginTop:40,
      borderRadius:25,
      paddingHorizontal:16,
    },
    PwInput:{
      flex: 1,
      width:330,
      height:40,
      backgroundColor:"white",
      marginLeft:50,
      marginTop:10,
      borderRadius:25,
      paddingHorizontal:16,
    },
    LogButton:{
      flex:1,
      
      width:200,
      height:40,
      marginLeft:120,
      marginTop:40,
      backgroundColor:"red",
      borderRadius:25,
    },
    RegisButton:{
      flex: 1,
      width:200,
      height:40,
      marginLeft:120,
      marginTop:40,
      backgroundColor:"#8F7070",
      borderRadius:25,
    }

  });
  
