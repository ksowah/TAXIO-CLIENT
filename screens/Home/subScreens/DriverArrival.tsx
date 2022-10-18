import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import themeContext from "../../../components/config/themeContext";
import Map from "../../../components/Map";
import { Theme } from "../../../types";
import { FontAwesome5 } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Avatar } from "@rneui/base";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  addressAtom,
  destinationAtom,
  destinationSelected,
  originAtom,
  priceAtom,
  travelTimeInfo,
} from "../../../components/atoms/tripAtom";
import ModalPoup from "../../../components/ModalPopup";
import StarRatings from "../../../components/bottomSheetUtils/StarRatings";
import MarkerTarget from "../../../components/bottomSheetUtils/MarkerTarget";
import { useMutation, useQuery } from "@apollo/client";
import { BOOKINGS_MUTATION } from "../../../mutations/bookingsMutation";
import { ME_QUERY } from "../../../queries/meQuery";

const DriverArrival = ({ navigation }: any) => {
  const theme: Theme = useContext(themeContext);

  const ref = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["40%", "65%"], []);

  const [tripStart, setTripStart] = useState<boolean | any>(false);
  const [tripEnd, setTripEnd] = useState<boolean | any>(false);


  const [origin, setOrigin] = useRecoilState<any>(originAtom);
  const [destination, setDestination] = useRecoilState<any>(destinationAtom);

  const originSlice = origin?.description.split(",")[0];
  const destinationSlice = destination?.description;

  const address = useRecoilValue<any>(addressAtom);
  const addressSlice = address?.split(",")[0];

  const [showModal, setShowModal] = useState(false);

  const [isDestinationSelected, setIsDestinationSelected] =
    useRecoilState<any>(destinationSelected);

  const price = useRecoilValue(priceAtom)
  const distanceAndTime: any = useRecoilValue(travelTimeInfo)

  // format todays date and time in months, days, years, hours, minutes and seconds
  const date = new Date().toLocaleString('en-US', { month: '2-digit', 
  day: 'numeric', 
  year: 'numeric', 
  hour: 'numeric', 
  minute: 'numeric', 
  second: 'numeric', 
  hour12: true })

  // get me query
  const { data: session } = useQuery(ME_QUERY);

  const [addToBookings, { loading }] = useMutation(BOOKINGS_MUTATION, {
    variables: { data: { origin: originSlice,
       destination: destinationSlice,
        distance: distanceAndTime.distance.text,
        time: distanceAndTime.duration.text,
        price, 
        date,
        user: session?.me._id,
      } },
  });


  useEffect(() => {
    setTimeout(() => {
      setTripStart(true);
      ref.current?.expand();
    }, 5000);

  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 8000);
  }, [])

  const completeRating = () => {
    setIsDestinationSelected(false)
    setOrigin(null)
    setDestination(null)
    navigation.replace("BaseHome")
  }



  return (
    <View style={tw`flex-1 bg-[${theme.base}]`}>
      <ModalPoup
        onPress={() => {
          setTripStart(false)
          setTripEnd(true)
          addToBookings()
          setShowModal(false);
        }}
        setShowModal={setShowModal}
        showModal={showModal}
        image={theme.mode ? require("../../../assets/trip-marker.png") : require("../../../assets/trip-marker-light.png")}
        title={"You have arrived at your destination!"}
        subTitle={
          "See you on the next trip : )"
        }
        title_color={`text-[${theme.yellow}]`}
      />

      <Map navigation={navigation} />

      <BottomSheet
        ref={ref}
        snapPoints={snapPoints}
        handleStyle={tw`bg-[${theme.base}] rounded-t-3xl`}
        handleIndicatorStyle={tw`bg-[${theme.border}]`}
        backgroundStyle={tw`bg-[${theme.base}] shadow-xl`}
      >
        <BottomSheetView style={tw`h-full bg-[${theme.base}]`}>
          <View style={tw`px-3 items-center `}>
            <View
              style={tw`py-2 w-full pb-6 border-b shadow-2xl flex-row items-center justify-between ${tripEnd && "justify-center"} border-[${theme.border}]`}
            >
              <Text style={tw`text-[${theme.text}] font-bold text-2xl`}>
                {tripStart ? "Trip to Destination" : tripEnd ? "Rate Driver" : "Driver is Arriving..."}
              </Text>

              <Text style={tw`text-[${theme.text}] text-[1rem] ${tripEnd && "hidden"}`}>2mins</Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("DriverProfile")}
              style={tw`flex-row w-full items-center justify-between mt-6 ${tripStart && `border-b border-[${theme.border}] pb-6`
                }`}
            >
              <View style={tw`flex-row items-center`}>
                <Avatar
                  rounded
                  size={60}
                  source={require("../../../assets/kevin.jpg")}
                />

                <View style={tw`ml-4`}>
                  <Text
                    style={tw`text-[${theme.text}] text-[1.1rem] font-bold mb-2`}
                  >
                    Kelvin Sowah
                  </Text>
                  <Text style={tw`text-[${theme.fade_text}] text-[0.8rem]`}>
                    Mercedes-Benze E-Class
                  </Text>
                </View>
              </View>

              <View style={tw`items-end`}>
                <View style={tw`flex-row items-center mb-2`}>
                  <FontAwesome5
                    name="star-half-alt"
                    size={20}
                    color={theme.yellow}
                  />
                  <Text
                    style={tw`text-[${theme.fade_text}] ml-2 text-[0.9rem]`}
                  >
                    4.8
                  </Text>
                </View>

                <Text style={tw`text-[${theme.text}] text-[.8rem] font-bold`}>
                  HSW 4736 XK
                </Text>
              </View>
            </TouchableOpacity>

            {/* {tripStart && ( */}
            {tripEnd ? (
              <StarRatings />
            ) : (
              <MarkerTarget
                from={originSlice || addressSlice}
                destination={destinationSlice}
                from_description={origin?.description || address}
                destination_description={destination?.description}
              />
            )
            }
            <View style={tw`flex-row items-center mt-6`}>

              {tripEnd ? (
                <View style={tw`flex-row items-center`}>
                  <TouchableOpacity onPress={completeRating} activeOpacity={.5} style={tw`w-[9rem] bg-[${theme.input_base}] items-center justify-center rounded-3xl mx-6 h-[3.1rem]`}>
                    <Text style={tw`text-lg font-bold text-center text-[${theme.text}]`}>
                      Cancel
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={completeRating} activeOpacity={.5} style={tw`w-[9rem] bg-[#FEBB1B] items-center justify-center shadow-[#FEBB1B] shadow-2xl rounded-3xl mx-6 h-[3.1rem]`}>
                    <Text style={tw`text-lg font-bold text-center`}>
                      Submit
                    </Text>
                  </TouchableOpacity>

                </View>
              ) : (
                <>
                  {!tripStart && (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={tw`h-18 w-18 bg-[#ffe4a4] mr-4 rounded-full items-center justify-center`}
                      onPress={() => navigation.navigate("CancelTrip")}
                    >
                      <FontAwesome5 name="times" size={26} color="#181a20" />
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={tw`h-18 w-18 bg-[${theme.yellow}] mr-4 rounded-full items-center justify-center`}
                  >
                    <Ionicons
                      name="chatbubble-ellipses-sharp"
                      size={26}
                      color="#181a20"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={tw`h-18 w-18 bg-[${theme.yellow}] rounded-full items-center justify-center`}
                  >
                    <FontAwesome name="phone" size={26} color="#181a20" />
                  </TouchableOpacity>
                </>
              )}

            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default DriverArrival;
