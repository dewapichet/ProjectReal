import React, { useState } from "react";
import { Button } from "react-native";
import { View, StyleSheet,Image, Text, SafeAreaView,TouchableOpacity, TextInput } from "react-native";



export default HomeMec = ({navigation})  => {
    return (
      
      <SafeAreaView style={styles.container}>  
        
        <Text style={styles.TitleName}>Home</Text>
           <TouchableOpacity style={styles.Map} onPress={()=>navigation.navigate('Maps')}>
                <Text style={{textAlign:"center" ,paddingVertical:10}} >เพิ่มตำแหน่งของร้าน</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Logout} onPress={()=>navigation.navigate('Login')}>
                <Text style={{textAlign:"center" ,paddingVertical:10} } >Logout</Text>
            </TouchableOpacity>
      </SafeAreaView>
      
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6E4E4',
    },
    Map:{
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