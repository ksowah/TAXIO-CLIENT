import {
  View,
  Text,
  useWindowDimensions,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
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
import PlacesInputAutoComplete from "./PlacesInputAutoComplete";
import { Feather } from "@expo/vector-icons";

const BottomSheetComponent = ({navigation}: any) => {
  // implement bottom sheet
  const ref1 = useRef<BottomSheet>(null);
  const ref2 = useRef<BottomSheet>(null);
  const snapPoints1 = useMemo(() => ["15%", "90%"], []);
  const snapPoints2 = useMemo(() => ["50%"], []);
  const [sheetSnapPoint, setsheetSnapPoint] = useState<any>(0);
  const [isSelected, setIsSelected] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const theme: Theme = useContext(themeContext);

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
      <Map navigation={navigation}/>

      <BottomSheet
        ref={ref1}
        index={0}
        snapPoints={snapPoints1}
        onChange={handleSheetChanges}
        handleStyle={tw`bg-[${theme.base}] rounded-t-3xl`}
        handleIndicatorStyle={tw`bg-[#9e9e9e]`}
        backgroundStyle={tw`bg-[${theme.base}] shadow-xl`}
      >
        <BottomSheetView style={tw`h-full bg-[${theme.base}]`}>
          <Input
            containerStyle={tw`w-full ${sheetSnapPoint && "hidden"}`}
            inputContainerStyle={tw`border-b-0 bg-[${theme.input_base}] h-13 rounded-2xl px-2 text-center`}
            placeholder={"Where would you go?"}
            placeholderTextColor={"#797a7c"}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
            inputStyle={tw`text-white`}
            autoCorrect={false}
            returnKeyType="next"
            onFocus={handleChangeSnapPoint}
            rightIcon={<Foundation name="marker" size={24} color="#9e9e9e" />}
            // onChangeText={(email) => setEmail(email)}
            // value={email}
          />

          {sheetSnapPoint === 1 && (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Animated.View
              style={[tw`w-full flex-1 px-4`, { opacity: fadeAnim }]}
            >
              
              <View style={tw`py-4 border-b border-[${theme.border}]`}>
                <Text
                  style={tw`text-[${theme.text}] text-center font-bold text-2xl`}
                >
                  Select Address
                </Text>
              </View>
  
              <View style={tw`py-6 flex-row border-b border-[${theme.border}]`}>
                <View style={tw`h-[8rem] justify-evenly items-center`}>
                  <FontAwesome5 name="dot-circle" size={26} color="#febb1b" />
                  <Ionicons name="ellipsis-vertical" size={26} color="#9e9e9e" />
                  <FontAwesome5 name="map-marker-alt" size={26} color="#febb1b" />
                </View>
  
                <View style={tw`relative flex-1`}>
                  <View style={tw`flex-1 mb-4`}>
                    <PlacesInputAutoComplete />
                  </View>
                  <View style={tw`flex-1`}>
                    <PlacesInputAutoComplete />
                  </View>
                </View>
              </View>
  
              <View
                style={[
                  tw`flex-row items-center justify-between py-6 border-b border-[${theme.border}]`,
                  { zIndex: -10 },
                ]}
              >
                <View style={tw`flex-row items-center`}>
                  <FontAwesome name="bookmark" size={24} color="#febb1b" />
                  <Text style={tw`text-[${theme.text}] font-bold text-xl ml-4`}>
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
