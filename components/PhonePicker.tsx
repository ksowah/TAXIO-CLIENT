import React, { useState, useRef } from "react";
import { View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import tw from "twrnc";

interface Props {
    setPhoneNumber: any;
}

const PhonePicker = ({setPhoneNumber}: Props) => {
  const [value, setValue] = useState("");
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <>
      <View style={tw` px-2`}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="GH"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setPhoneNumber(text);
            }}
            withDarkTheme
            withShadow
            containerStyle={tw`bg-[#1F222A] h-13 w-full overflow-hidden rounded-2xl text-center`}
            textContainerStyle={tw`bg-[#1F222A] h-13 w-full`}
            textInputStyle={tw`text-white text-[1.1rem]`}
            codeTextStyle={tw`text-white`}
          />
      </View>
    </>
  );
};

export default PhonePicker