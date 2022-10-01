import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import tw from "twrnc";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { darkThemeMap } from "../utils/mapStyles";

const Map = () => {
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");

        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    })();
  }, []);

  

  return (
    <>
      <MapView
        style={styles.map}
        mapType="mutedStandard"
        initialRegion={position}
        customMapStyle={darkThemeMap}
        provider={ PROVIDER_GOOGLE }
      >
        <Marker
          coordinate={{
            latitude: position.latitude,
            longitude: position.longitude,
          }}
          title="Origin"
          description="This is the origin"
          identifier="origin"
        />
      </MapView>
    </>
  );
};

export default Map;


const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});


