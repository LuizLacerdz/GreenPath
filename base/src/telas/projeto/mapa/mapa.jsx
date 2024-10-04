import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Platform, PermissionsAndroid, Dimensions } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const {width, height} = Dimensions.get('screen');

export default function Map() {
  const [region, SetRegion] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    getMyLocation();
  }, []);

  function getMyLocation() {
    Geolocation.getCurrentPosition(
      position => {
        console.log('LAT ', info.coords.latitude);
        console.log('LONG ', info.coords.longitude);

        SetRegion({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.922,
          longitudeDelta: 0.0421,
        });
      },
      () => {
        console.log('DEU ALGUM ERRO');
      },
      {
        enableHighAccuracy: true,
        timeout: 2000,
      },
    );
  }

  function newMarker(e) {
    //*console.log(e.nativeEvent.coords.coordinate.latitude);

    let dados = {
      key: markers.length,
      coords: {
        latitude: e.nativeEvent.coords.coordinate.latitude,
        longitude: e.nativeEvent.coords.coordinate.longitude,
      },
      pinColor: '#ff0000',
    };

    SetRegion({
      latitude: e.native.coordinate.latitude,
      longitude: e.native.coordinate.longitude,
      latitudeDelta: 0.922,
      longitudeDelta: 0.0421,
    });

    setMarkers(oldArray => [...oldArray, dados]);
  }

  return (
    <View style={styles.container}>
      <MapView
        onMapReady={() => {
          Platform.OS === 'android'
            ? PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              ).then(() => {
                console.log('permission granted');
              })
            : '';
        }}
        style={{width: width, height: height}}
        region={region}
        zoomEnabled={true}
        showsUserLocation={true}
        loadingEnabled={true}
        onPress={e => newMarker(e)}>
        {Markers.map(marker => {
          return (
            <Marker
              key={marker.key}
              coordinate={marker.coords}
              pinColor={marker.pinColor}
            />
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
