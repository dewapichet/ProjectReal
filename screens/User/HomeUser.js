import React, { useState } from "react";
import { Button } from "react-native";
import { View, StyleSheet,Image, Text, SafeAreaView,TouchableOpacity, TextInput } from "react-native";



export default HomeUser = ({navigation})  => {
    return (
      
      <SafeAreaView style={styles.container}>  
        
        <Text style={styles.TitleName}>Home</Text>
           <TouchableOpacity style={styles.Search} onPress={()=>navigation.navigate('Search')}>
                <Text style={{textAlign:"center" ,paddingVertical:10}} >ค้นหาตำแหน่งของช่าง</Text>
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