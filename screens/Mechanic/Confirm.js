import React, { useState } from "react";

import { View, StyleSheet,Image, Text, SafeAreaView,TouchableOpacity, TextInput } from "react-native";



export default Confirm = ({navigation})  => {
    return (
      
      <SafeAreaView style={styles.container}>  
          <Text style={styles.TextTitle}>
            ยืนยันตัวตนของช่าง
          </Text>
          <TouchableOpacity style={styles.Register} onPress={()=>navigation.navigate('Register')}>
                <Text style={{textAlign:"center" ,paddingVertical:10}} >CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Wait} onPress={()=>navigation.navigate('Wait')}>
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
    Register:{
      width:180,
      height:40,
      marginLeft:120,
      marginTop:10,
      backgroundColor:"#8F7070",
      borderRadius:25,
    },
    Wait:{
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
  
