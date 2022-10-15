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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRecoilValue } from "recoil";
import {
  addressAtom,
  destinationAtom,
  originAtom,
} from "../../../components/atoms/tripAtom";
import ModalPoup from "../../../components/ModalPopup";

const DriverArrival = ({ navigation }: any) => {
  const theme: Theme = useContext(themeContext);

  const ref = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["40%", "65%"], []);

  const [tripStart, setTripStart] = useState<boolean | any>(false);

  const origin = useRecoilValue<any>(originAtom);
  const destination = useRecoilValue<any>(destinationAtom);

  const originSlice = origin?.description.split(",")[0];
  const destinationSlice = destination?.description;

  const address = useRecoilValue<any>(addressAtom);
  const addressSlice = address?.split(",")[0];

  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTripStart(true);
      ref.current?.expand();
    }, 5000);
  }, [tripStart]);

  return (
    <View style={tw`flex-1 bg-[${theme.base}]`}>
      <ModalPoup
        onPress={() => {
          setShowModal(false);
        }}
        setShowModal={setShowModal}
        showModal={showModal}
        image={require("../../../assets/trip-marker.png")}
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
              style={tw`py-2 w-full pb-6 border-b shadow-2xl flex-row items-center justify-between border-[${theme.border}]`}
            >
              <Text style={tw`text-[${theme.text}] font-bold text-2xl`}>
                {tripStart ? "Trip to Destination" : "Driver is Arriving..."}
              </Text>

              <Text style={tw`text-[${theme.text}] text-[1rem]`}>2mins</Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("DriverProfile")}
              style={tw`flex-row w-full items-center justify-between mt-6 ${
                tripStart && `border-b border-[${theme.border}] pb-6`
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

            {tripStart && (
              <View
                style={tw`py-6 flex-row border-b mb-4 border-[${theme.border}]`}
              >
                <View style={tw`h-[8rem] justify-evenly items-center`}>
                  <View
                    style={tw`bg-[${theme.fade_yellow}] h-12 w-12 rounded-full items-center justify-center`}
                  >
                    <View
                      style={tw`bg-[${theme.yellow}] h-8 w-8 rounded-full items-center justify-center`}
                    >
                      <Foundation name="target-two" size={20} color="#35353f" />
                    </View>
                  </View>

                  <Ionicons
                    name="ellipsis-vertical"
                    size={26}
                    color="#9e9e9e"
                  />

                  <View
                    style={tw`bg-[${theme.fade_yellow}] h-12 w-12 rounded-full items-center justify-center`}
                  >
                    <View
                      style={tw`bg-[${theme.yellow}] h-8 w-8 rounded-full items-center justify-center`}
                    >
                      <FontAwesome5
                        name="map-marker-alt"
                        size={20}
                        color="#35353f"
                      />
                    </View>
                  </View>
                </View>

                <View style={tw`relative flex-1 pl-2`}>
                  <View style={tw`flex-1 mb-4 flex-row items-center `}>
                    {/* --------// */}
                    <View style={tw`flex-1`}>
                      <Text
                        style={tw`text-[${theme.text}] text-[1.3rem] font-bold`}
                      >
                        {originSlice || addressSlice}
                      </Text>
                      <Text style={tw`text-[${theme.fade_text}] text-[.9rem]`}>
                        {origin?.description || address}
                      </Text>
                    </View>
                  </View>

                  <View style={tw`flex-1 flex-row items-center`}>
                    {/* --------// */}
                    <View style={tw`flex-1`}>
                      <Text
                        style={tw`text-[${theme.text}] text-[1.3rem] font-bold`}
                      >
                        {destinationSlice}
                      </Text>
                      <Text style={tw`text-[${theme.fade_text}] text-[.9rem]`}>
                        {destination?.description}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

            <View style={tw`flex-row items-center mt-6`}>
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
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default DriverArrival;
