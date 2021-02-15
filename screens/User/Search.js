import * as React from 'react';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

export default function Search() {
  
  return (
    
    <View style={styles.container}>
      <MapView style={styles.map}
      initialRegion={{
        latitude: 19.027943,
        longitude: 99.900325,
        latitudeDelta: 0.0100,
        longitudeDelta: 0.0091,
      }}
      >
        <MapView.Marker
            coordinate={{latitude: 19.027500,
            longitude: 99.8998000}}
            title={"title"}
            description={"description"}
    />
    </MapView>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
 
});