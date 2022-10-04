import { View, Text } from "react-native";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import themeContext from "./config/themeContext";
import { Theme } from "../types";
import { useContext, useEffect, useRef } from "react";
import { FontAwesome5 } from "@expo/vector-icons";


interface Props {
    setIsSelected?: any
}

const PlacesInputAutoComplete = ({setIsSelected}: Props) => {
  const theme: Theme = useContext(themeContext);

  const ref: any = useRef(null)

  useEffect(() => {
    ref.current?.focus()
  }, [])
  

  return (
    <GooglePlacesAutocomplete
        ref={ref}
      placeholder="Where would you go?"
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      onPress={(data, details) => {
        console.log("data", data);
        console.log("details", details);
        setIsSelected(true)
      }}
      styles={{
        textInput: tw`text-[${theme.text}] text-[18px] bg-[${theme.input_base}] px-1 h-13 rounded-2xl px-2`,
        container: tw`px-1`,
        row: tw`bg-[${theme.base}] flex-1 w-full`,
        description: tw`text-[${theme.text}]`,
        separator: tw`bg-[${theme.border}]`,
        poweredContainer: tw`bg-[${theme.base}] border-t border-[${theme.border}] text-[${theme.text}]`,
        listView: tw`bg-[${theme.base}] absolute top-30 w-full border-t border-[${theme.border}]`,
        powered: tw`text-[${theme.text}]`,
      }}
      disableScroll={true}
      enablePoweredByContainer={false}
      fetchDetails={true}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: "en",
      }}
      keepResultsAfterBlur={true}
      renderRow={(data) => (
        
        <View style={tw`flex-1 flex-row items-center`}>
          <View
            style={tw`bg-[${theme.fade_yellow}] h-12 w-12 rounded-full items-center justify-center mr-2`}
          >
            <View
              style={tw`bg-[${theme.yellow}] h-8 w-8 rounded-full items-center justify-center`}
            >
              <FontAwesome5
                name="map-marker-alt"
                size={18}
                color="#35353f"
              />
            </View>
          </View>
          <Text style={tw`text-[${theme.text}] font-bold text-[1rem]`}>{data.description}</Text>
        </View>
      )}
      listEmptyComponent={
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-[${theme.text}] text-center font-bold text-2xl`}>
            No results found
          </Text>
        </View>
      }
    />
  );
};

export default PlacesInputAutoComplete;
