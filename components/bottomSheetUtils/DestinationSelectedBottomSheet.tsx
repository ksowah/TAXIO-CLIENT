import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import tw from "twrnc";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useMemo, useRef, useState } from "react";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import themeContext from "../config/themeContext";
import { useRecoilValue } from "recoil";
import {
  addressAtom,
  destinationAtom,
  originAtom,
  travelTimeInfo,
} from "../atoms/tripAtom";
import Button from "../Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Theme } from "../../types";
import { useMutation, useQuery } from "@apollo/client";
import { ME_QUERY } from "../../queries/meQuery";
import { RIDE_HISTORY_MUTATION } from "../../mutations/rideHistoryMutation";

const DestinationSelectedBottomSheet = ({
  navigation,
  setIsDestinationSelected,
}: any) => {
  const ref2 = useRef<BottomSheet>(null);
  const snapPoints2 = useMemo(() => ["45%", "85%"], []);
  useState<any>(false);

  const theme: Theme = useContext(themeContext);

  const origin = useRecoilValue<any>(originAtom);

  const destination = useRecoilValue<any>(destinationAtom);

  const travelDistance = useRecoilValue<any>(travelTimeInfo);

  const travelDistanceKM = travelDistance?.distance?.text;

  const address = useRecoilValue<any>(addressAtom);

  const addressSlice = address?.split(",")[0];

  const originSlice = origin?.description.split(",")[0];
  const destinationSlice = destination?.description
    .split(",")
    .slice(0, 1)
    .join(" ");

  const { data: session } = useQuery(ME_QUERY);

  // add ride to histories with user id as a variable and update the cache
  const [addRideHistory, { loading }] = useMutation(RIDE_HISTORY_MUTATION, {
    // add variables to the mutation
    variables: {
      user: session?.me?._id,
      description: destination?.description,
      lat: destination?.location.lat.toString(),
      lng: destination?.location.lng.toString(),
    },

  });

  const proceed = () => {
    // call the mutation to add ride to histories
    addRideHistory().then((res) => {
      navigation.navigate("SelectRide");
    });
  };

  return (
    <BottomSheet
      ref={ref2}
      index={0}
      snapPoints={snapPoints2}
      handleStyle={tw`bg-[${theme.base}] rounded-t-3xl`}
      handleIndicatorStyle={tw`bg-[${theme.border}]`}
      backgroundStyle={tw`bg-[${theme.base}] shadow-xl`}
    >
      <BottomSheetView style={tw`h-full bg-[${theme.base}]`}>
        <View style={tw`px-3 items-center `}>
          <View
            style={tw`py-2 w-full border-b shadow-2xl flex-row items-center justify-between border-[${theme.border}]`}
          >
            <Text style={tw`text-[${theme.text}] font-bold text-2xl`}>
              Distance
            </Text>

            <Text style={tw`text-[${theme.text}] text-[1rem]`}>
              {travelDistanceKM}
            </Text>
          </View>

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

              <Ionicons name="ellipsis-vertical" size={26} color="#9e9e9e" />

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

                <TouchableOpacity
                  activeOpacity={0.5}
                  style={tw`h-full items-center justify-center`}
                  onPress={() => setIsDestinationSelected(false)}
                >
                  <MaterialCommunityIcons
                    name="lead-pencil"
                    size={24}
                    color={theme.yellow}
                  />
                </TouchableOpacity>
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

                <TouchableOpacity
                  activeOpacity={0.5}
                  style={tw`h-full items-center justify-center`}
                  onPress={() => setIsDestinationSelected(false)}
                >
                  <MaterialCommunityIcons
                    name="lead-pencil"
                    size={24}
                    color={theme.yellow}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Button
            title="Continue to Order"
            onPress={proceed}
            loading={loading}
          />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default DestinationSelectedBottomSheet;
