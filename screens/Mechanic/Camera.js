import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> หมุนกล้อง </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity style={styles.TakePhoto}>
                <Text style={{textAlign:"center"}} >Take Photo </Text>
            </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera:{
    width:"100%",
    height:360,
  },
  text:{
    marginEnd :10,
    borderRadius:25,
    
},
TakePhoto:{
    width:180,
    height:40,
    marginLeft:120,
    marginTop:10,
    backgroundColor:"#8F7070",
    borderRadius:25,
    paddingVertical:10,
}
});