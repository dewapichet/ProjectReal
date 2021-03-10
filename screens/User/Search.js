import React, { useState } from "react";
import { Button } from "react-native";
import { View, StyleSheet,Image, Text, SafeAreaView,TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Search({navigation}) {
  
  return (
    <ScrollView style={styles.container}>  
    <Text style={styles.title}>
      แจ้งเหตุผลการซ่อม
    </Text>
    <View>
    <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate('Detail')}>
          <Text style={{textAlign:"center" ,paddingVertical:10} } >รถสตาร์ทไม่ติด</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate('Detail')}>
          <Text style={{textAlign:"center" ,paddingVertical:10} } >รถยางรั่ว</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate('Detail')}>
          <Text style={{textAlign:"center" ,paddingVertical:10} } >เครื่องดับเอง</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate('Detail')}>
          <Text style={{textAlign:"center" ,paddingVertical:10} } >มีเสียงแปลกๆระหว่างขับ</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate('Detail')}>
          <Text style={{textAlign:"center" ,paddingVertical:10} } >มีน้ำหรือน้ำมันหยดที่พื้น</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate('Detail')}>
          <Text style={{textAlign:"center" ,paddingVertical:10} } >ไม่ทราบสาเหตุ</Text>
    </TouchableOpacity>
    </View>
   
</ScrollView>
        );
        }
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6E4E4',
  },

  title: {
      
    textAlign: 'center',
    marginVertical: 8,
    marginTop:50,
    height:40,
    fontSize :22,
  },
  Button:{
    width:180,
    height:40,
    marginLeft:120,
    marginTop:20,
    backgroundColor:"#1E90FF",
    borderRadius:25,
  },
  
 
});