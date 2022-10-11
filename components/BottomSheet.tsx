import {
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useContext } from "react";
import tw from "twrnc";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Map from "./Map";
import { Input } from "@rneui/themed";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import themeContext from "./config/themeContext";
import { Theme } from "../types";
import PickupAutoComplete from "./Home/PickupAutoComplete";
import DestinationAutocomplete from "./Home/DestinationAutocomplete";
import DestinationSelectedBottomSheet from "./bottomSheetUtils/DestinationSelectedBottomSheet";
import { destinationSelected } from "./atoms/tripAtom";
import { useRecoilState } from "recoil";

const BottomSheetComponent = ({ navigation }: any) => {
  // implement bottom sheet
  const ref1 = useRef<BottomSheet>(null);
  const ref2 = useRef<BottomSheet>(null);
  const snapPoints1 = useMemo(() => ["15%", "90%"], []);
  const snapPoints2 = useMemo(() => ["45%", "85%"], []);
  const [sheetSnapPoint, setsheetSnapPoint] = useState<any>(0);
  const [isDestinationSelected, setIsDestinationSelected] =
    useRecoilState<any>(destinationSelected);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const theme: Theme = useContext(themeContext);

  const [choseNewOrigin, setChoseNewOrigin] = useState(false);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    setsheetSnapPoint(index);
  }, []);

  // change snap point on button press
  const handleChangeSnapPoint = useCallback(() => {
    ref1.current?.expand();
  }, []);




  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim, sheetSnapPoint]);

  return (
    <View style={tw`flex-1`}>
      <Map navigation={navigation} />

      {isDestinationSelected && (
        <DestinationSelectedBottomSheet setIsDestinationSelected={setIsDestinationSelected} navigation={navigation}/>
      )}

      <BottomSheet
        ref={ref1}
        index={0}
        snapPoints={snapPoints1}
        onChange={handleSheetChanges}
        handleStyle={tw`bg-[${theme.base}] rounded-t-3xl`}
        handleIndicatorStyle={tw`bg-[${theme.border}]`}
        backgroundStyle={tw`bg-[${theme.base}] shadow-xl`}
        style={tw`${isDestinationSelected && "hidden"}`}
      >
        <BottomSheetView style={tw`h-full bg-[${theme.base}]`}>
          <Input
            containerStyle={tw`w-full ${sheetSnapPoint && "hidden"}`}
            inputContainerStyle={tw`border-b-0 bg-[${theme.input_base}] h-13 rounded-2xl px-2 text-center`}
            placeholder={"Where would you go?"}
            placeholderTextColor={"#797a7c"}
            autoCapitalize="none"
            inputStyle={tw`text-white`}
            autoCorrect={false}
            returnKeyType="next"
            onFocus={handleChangeSnapPoint}
            rightIcon={<Foundation name="marker" size={24} color="#9e9e9e" />}
          />

          {sheetSnapPoint === 1 && (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <Animated.View
                style={[tw`w-full flex-1 px-4`, { opacity: fadeAnim }]}
              >
                <View
                  style={tw`py-2 border-b shadow-2xl  border-[${theme.border}]`}
                >
                  <Text
                    style={tw`text-[${theme.text}] text-center font-bold text-2xl`}
                  >
                    Select Address
                  </Text>
                </View>

                <View
                  style={tw`py-6 flex-row border-b border-[${theme.border}]`}
                >
                  <View style={tw`h-[8rem] justify-evenly items-center`}>
                    <FontAwesome5 name="dot-circle" size={26} color="#febb1b" />
                    <Ionicons
                      name="ellipsis-vertical"
                      size={26}
                      color="#9e9e9e"
                    />
                    <FontAwesome5
                      name="map-marker-alt"
                      size={26}
                      color="#febb1b"
                    />
                  </View>

                  <View style={tw`relative flex-1 pl-2`}>
                    {choseNewOrigin ? (
                      <View
                        style={tw`flex-1 border border-[${theme.yellow}] mb-4 flex-row items-center justify-center bg-[${theme.input_base}] rounded-2xl`}
                      >
                        <PickupAutoComplete />
                        <TouchableOpacity
                          activeOpacity={0.5}
                          style={tw`w-10 h-full items-center justify-center`}
                          onPress={() => setChoseNewOrigin(false)}
                        >
                          <Foundation
                            name="target-two"
                            size={22}
                            color={theme.fade_text}
                          />
                        </TouchableOpacity>
                      </View>
                      
                    ) : (
                      <TouchableOpacity activeOpacity={.8} onPress={() => setChoseNewOrigin(true)} style={tw`flex-1 border border-[${theme.yellow}] mb-4 flex-row items-center justify-between bg-[${theme.input_focus}] rounded-2xl`}>
                        <Text style={tw`text-[${theme.text}] text-[1rem] ml-2`}>Current Location</Text>
                        <View
                          style={tw`w-10 h-full items-center justify-center`}
                        >
                          <Foundation
                            name="target-two"
                            size={22}
                            color={theme.fade_text}
                          />
                        </View>
                      </TouchableOpacity>
                    )}

                    <View
                      style={tw`flex-1 border border-[${theme.yellow}] flex-row items-center bg-[${theme.input_base}] rounded-2xl`}
                    >
                      <DestinationAutocomplete
                        setIsDestinationSelected={setIsDestinationSelected}
                      />
                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={tw`w-10 h-full items-center justify-center`}
                      >
                        <FontAwesome5
                          name="map-marker-alt"
                          size={22}
                          color={theme.fade_text}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {/* ------------// */}
                <View
                  style={[
                    tw`flex-row items-center justify-between py-6 border-b border-[${theme.border}]`,
                    { zIndex: -10 },
                  ]}
                >
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="bookmark" size={24} color="#febb1b" />
                    <Text
                      style={tw`text-[${theme.text}] font-bold text-xl ml-4`}
                    >
                      Saved Places
                    </Text>
                  </View>
                  <Entypo name="chevron-right" size={24} color="#febb1b" />
                </View>
              </Animated.View>
            </TouchableWithoutFeedback>
          )}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default BottomSheetComponent;
