import { View, Text } from "react-native";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useContext, useEffect, useRef, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Theme } from "../../types";
import themeContext from "../config/themeContext";
import { useRecoilState } from "recoil";
import { originAtom } from "../atoms/tripAtom";
import { RIDE_HISTORY_QUERY } from "../../queries/rideHistoryQuery";
import { useQuery } from "@apollo/client";
import { ME_QUERY } from "../../queries/meQuery";
import { AntDesign } from '@expo/vector-icons';


const PickupAutoComplete = () => {
  const theme: Theme = useContext(themeContext);

  const ref: any = useRef(null)

  const [origin, setOrigin] = useRecoilState(originAtom)

  const [history, setHistory] = useState<any>([])
  const [placeText, setPlaceText] = useState("")

  const { data: session } = useQuery(ME_QUERY);

  const { data, loading } = useQuery(RIDE_HISTORY_QUERY, {
    variables: {
      user: session?.me?._id,
    },
  });

  console.log(placeText.length);
  
  const Row = ({data}: any) => {

    if(placeText.length > 0) {
      return (
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
      )
    }

    return (
      <View style={tw`flex-1 flex-row items-center`}>
          <AntDesign name="clockcircleo" size={26 } color={theme.fade_text} />
          <Text style={tw`text-[${theme.text}] ml-4 font-bold text-[1rem]`}>{data.description}</Text>
        </View> 
    )
  }


  return (
    <GooglePlacesAutocomplete
        ref={ref}
      placeholder="From"
      textInputProps={{
        placeholderTextColor: theme.fade_text,
        autoFocus: true,
        // when user starts typing, show history
        onChangeText: (text) => setPlaceText(text),
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      onPress={(data, details) => {
        setOrigin({
            // set the origin state to the location and description
            location: details?.geometry.location,
            description: data.description
        })
      }}
      // add predefined places
      predefinedPlaces={
        data?.getRideHistory?.map((item: any) => {
         return {
          description: item.description,
            geometry: {
              location: {
                lat: item.lat,
                lng: item.lng,
              },
            },
         }
        }) 
      }
      styles={{
        textInput: tw`text-[${theme.text}] text-[18px] bg-[${theme.input_base}] px-2 h-12 rounded-2xl`,
        container: tw`px-1`,
        row: tw`bg-[${theme.base}] flex-1 w-full`,
        description: tw`text-[${theme.text}]`,
        separator: tw`bg-[${theme.border}]`,
        poweredContainer: tw`bg-[${theme.base}] border-t border-[${theme.border}] text-[${theme.text}]`,
        listView: tw`bg-[${theme.base}] absolute top-57 -left-10 w-[100]`,
        powered: tw`text-[${theme.text}]`,
      }}
      enablePoweredByContainer={false}
      fetchDetails={true}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: "en",
        components: "country:gh",
      }}
      keepResultsAfterBlur={true}
      renderRow={(data) => <Row data={data} />}
    />
  );
};

export default PickupAutoComplete;
