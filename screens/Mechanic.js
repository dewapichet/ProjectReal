import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView,TouchableOpacity, TextInput, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from '@react-native-community/picker';
import axios from 'axios';


export default Mechanic = ({navigation})  => {
    const[selectedValue,setSelectedValue] =useState("");
    const selectGenre = (value) => {
        setSelectedValue(value)}
    return (
      <ScrollView style={styles.container}>
            <Text style={styles.TitleName}>Register</Text>
            <TextInput style={styles.textInput} placeholder="ชื่อ" 
                underlineColorAndroid={'transparent'}/>
            <TextInput style={styles.textInput} placeholder="นามสกุล" 
                underlineColorAndroid={'transparent'}/>
            <TextInput style={styles.textInput} placeholder="รหัสประจำตัวประชาชน" 
                underlineColorAndroid={'transparent'}/>
            <TextInput style={styles.textInput} placeholder="เบอร์โทร" 
                underlineColorAndroid={'transparent'}/>
            <TextInput style={styles.textInput} placeholder="ที่อยู่" 
                underlineColorAndroid={'transparent'}/>
            <TextInput style={styles.textInput} placeholder="ID" 
                underlineColorAndroid={'transparent'}/>
            <TextInput style={styles.textInput} placeholder="Password" 
                underlineColorAndroid={'transparent'}/>
            <TextInput style={styles.textInput} placeholder="Confirm Password" 
                underlineColorAndroid={'transparent'}/> 
            <TouchableOpacity style={styles.ccButton} onPress={()=>navigation.navigate('Login')}>
                <Text style={{textAlign:"center" ,paddingVertical:10}} >CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cfButton} onPress={()=>navigation.navigate('Confirm')}>
                <Text style={{textAlign:"center" ,paddingVertical:10} } >CONFIRM</Text>
            </TouchableOpacity>     
      </ScrollView>
      
    );
  }
  
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F6E4E4',
      alignSelf : 'stretch'

    },
    TitleName:{
        fontSize:30,
        textAlign:"center"
    },
    textInput:{
        alignSelf :'stretch',
        height:40,
        marginBottom:20,
        color:'black',
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:1,
        paddingHorizontal:16,
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
    selectGenre:{
        marginTop:20,
    }

  });
  
