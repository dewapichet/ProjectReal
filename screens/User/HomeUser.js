import React, { useState } from "react";
import { Button } from "react-native";
import { View, StyleSheet,Image, Text, SafeAreaView,TouchableOpacity, TextInput } from "react-native";



export default HomeUser = ({navigation})  => {
    return (
      
      <SafeAreaView style={styles.container}>  
          
           <View style={styles.userInfoSection}>
        <View style={styles.row}>
          
          <Text style={{color:"#777777", marginLeft: 20}}>ชื่อ : Kathawut Mangkalad</Text>
        </View>
        <View style={styles.row}>
        
          <Text style={{color:"#777777", marginLeft: 20}}>เบอร์โทร : 0638256132</Text>
        </View>
        <View style={styles.row}>
         
          <Text style={{color:"#777777", marginLeft: 20}}>ที่อยู่ : ฟ้ามุ่ย​ 1, 19  Mae Ka,
                  Mueang Phayao District, 
                  Phayao 56000</Text>
        </View>
      </View>
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
      marginTop:100,
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
      userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
        marginTop:300,
        
      },
      row: {
        flexDirection: 'row',
        marginBottom: 20,
      },
  });