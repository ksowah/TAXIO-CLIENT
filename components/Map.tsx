import { useContext } from "react"
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import tw from "twrnc";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { darkThemeMap } from "../utils/mapStyles";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {EventRegister} from "react-native-event-listeners";
import themeContext from "./config/themeContext";
import { Theme } from "../types";


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

  const changeTheme = () => {
    setSwitchTheme(!switchTheme)
    EventRegister.emit('switchTheme', switchTheme)
    }

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={position}
        customMapStyle={!switchTheme ? darkThemeMap : undefined}
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

          <View style={tw`absolute top-[55px] right-6 flex-row items-center`}>
             <MapTabs onPress={() => navigation.navigate("SearchLocation")} theme={theme} Icon={<Feather name="search" size={24} color={theme.text} />}/>
             <MapTabs onPress={changeTheme} theme={theme} Icon={<Feather name="bell" size={24} color={theme.text} />}/>
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


