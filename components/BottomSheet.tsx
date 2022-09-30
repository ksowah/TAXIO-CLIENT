import { View, Text, useWindowDimensions } from "react-native";
import tw from "twrnc";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef } from "react";
import Map from "./Map";
import { Input } from "@rneui/themed";
import { Foundation } from '@expo/vector-icons';

const BottomSheetComponent = () => {
  // implement bottom sheet
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["15%", "50%", "95%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // change snap point on button press
  const handleChangeSnapPoint = useCallback(() => {
    bottomSheetRef.current?.expand()
  }, []);


  // variables
  const { height } = useWindowDimensions();

  return (
    <View style={tw`flex-1`}>
      <Map />

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleStyle={tw`bg-[#181a20] rounded-t-3xl`}
        handleIndicatorStyle={tw`bg-[#9e9e9e]`}
      >
        <BottomSheetView style={tw`h-full bg-[#181a20]`}>
          <Input
            containerStyle={tw`w-full`}
            inputContainerStyle={tw`border-b-0 bg-[#1F222A] h-13 rounded-2xl px-2 text-center`}
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
            rightIcon={
              <Foundation name="marker" size={24} color="#9e9e9e" />
            }
            // onChangeText={(email) => setEmail(email)}
            // value={email}
          />

        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default BottomSheetComponent;
