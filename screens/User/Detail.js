import React, { useState } from "react";
import { Button } from "react-native";
import { View, StyleSheet,Image, Text, SafeAreaView,TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";



export default Detail = ({navigation})  => {
    return (
      
      <ScrollView style={styles.container}>  
         
            <TouchableOpacity style={styles.Logout} onPress={()=>navigation.navigate('Login')}>
                <Text style={{textAlign:"center" ,paddingVertical:10} } >Logout</Text>
            </TouchableOpacity>
      </ScrollView>
      
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6E4E4',
    },
      Logout:{
        flex: 1,
        width:180,
        height:40,
        marginLeft:120,
        marginTop:500,
        backgroundColor:"#FF0F00",
        borderRadius:25,
      },
  });