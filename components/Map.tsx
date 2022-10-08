import { useContext } from "react"
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import tw from "twrnc";
import { useEffect, useState, useRef } from "react";
import * as Location from "expo-location";
import { darkThemeMap } from "../utils/mapStyles";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {EventRegister} from "react-native-event-listeners";
import themeContext from "./config/themeContext";
import { Theme } from "../types";
import { useRecoilState, useRecoilValue } from "recoil";
import { addressAtom, destinationAtom, originAtom, travelTimeInfo } from "./atoms/tripAtom";
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_API_KEY } from "@env";


interface Props {
  onPress: () => void;
  theme: Theme;
  Icon: any;
}

const MapTabs = ({onPress, theme, Icon}: Props) => {
  return (
    <TouchableOpacity activeOpacity={.5} onPress={onPress} style={tw`mr-2 rounded-full items-center justify-center h-12 w-12 bg-[${theme.map_items}] shadow-lg`}>
    { Icon }
    </TouchableOpacity>
  )
}
const Map = ({navigation}: any) => {

  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [switchTheme, setSwitchTheme] = useState(true)

  const theme: Theme = useContext(themeContext)

  const origin: any = useRecoilValue(originAtom)

  const destination: any = useRecoilValue(destinationAtom)

  const [travelTime, setTravelTime] = useRecoilState(travelTimeInfo)

  const mapRef: any = useRef(null)

  const [address, setAddress] = useRecoilState<any>(addressAtom)

  

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");

        return;
      }

      let location = await Location.getCurrentPositionAsync({})

      let address = await Location.reverseGeocodeAsync(location?.coords)

      setAddress(address[0].city + ", " + address[0].region + ", " + address[0].country)

      setPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    })();
  }, []);

  useEffect(() => {
    if (!origin || !destination) return;
    
    // Zoom and fit to markers
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {
        top: 0, 
        right: 90,
        left: 90,
        bottom: 350,
      }})
  }, [origin, destination, position])
  
  useEffect(() => {
    
    if(!origin && !address || !destination) return;
    
    let pickUp = origin ?  `${origin.location.lat},${origin.location.lng}` : `${position.latitude},${position.longitude}`
    let dropOff = `${destination.location.lat},${destination.location.lng}`

    const getTravelTime = async () => {

      // get the travel time
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${pickUp}&destinations=${dropOff}&key=${GOOGLE_MAPS_API_KEY}`
      fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log("travel time",data);
        
        setTravelTime(data.rows[0].elements[0])
      })
    }

    getTravelTime()

  }, [origin, destination, GOOGLE_MAPS_API_KEY, position])
  

  const changeTheme = () => {
    setSwitchTheme(!switchTheme)
    EventRegister.emit('switchTheme', switchTheme)
    }

  return (
    <>
      <MapView
      ref={mapRef}
        style={styles.map}
        initialRegion={position}
        customMapStyle={!switchTheme ? darkThemeMap : undefined}
        provider={ PROVIDER_GOOGLE }
      >

        {origin || address && destination && (
          <MapViewDirections 
            origin={origin ? {latitude: origin.location.lat, longitude: origin.location.lng} : {latitude: position.latitude, longitude: position.longitude}} 
            destination={{latitude: destination.location.lat, longitude: destination.location.lng}}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={5}
            strokeColor={theme.directions}
          />
        )}

        <Marker
          coordinate={{
            latitude: origin ? origin.location.lat : position.latitude,
            longitude: origin ? origin.location.lng : position.longitude,
          }}
          title="Origin"
          description="This is the origin"
          identifier="origin"
        />

        {destination && (
          <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description="This is the origin"
          identifier="destination"
        />
        )}
      </MapView>

          <View style={tw`absolute top-[55px] right-6 flex-row items-center`}>
             <MapTabs onPress={() => navigation.navigate("SearchLocation")} theme={theme} Icon={<Feather name="search" size={24} color={theme.text} />}/>
             <MapTabs onPress={() => navigation.navigate("Notifications")} theme={theme} Icon={<Feather name="bell" size={24} color={theme.text} />}/>
             <MapTabs onPress={changeTheme} theme={theme} Icon={<FontAwesome name="moon-o" size={24} color={theme.text} />}/>
          </View>
     
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


