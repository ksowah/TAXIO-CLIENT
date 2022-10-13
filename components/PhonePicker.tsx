import { useState, useRef, useContext } from "react";
import { View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import tw from "twrnc";
import { Theme } from "../types";
import themeContext from "./config/themeContext";

interface Props {
    setPhoneNumber: any;
}

const PhonePicker = ({setPhoneNumber}: Props) => {
  const [value, setValue] = useState("");
  const phoneInput = useRef<PhoneInput>(null);

  const theme: Theme = useContext(themeContext)

  return (
    <>
      <View style={tw` px-2`}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="US"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setPhoneNumber(text);
            }}
            withDarkTheme
            withShadow
            containerStyle={tw`bg-[${theme.input_base}] h-13 w-full overflow-hidden rounded-2xl text-center`}
            textContainerStyle={tw`bg-[${theme.input_base}] h-13 w-full`}
            textInputStyle={tw`text-[${theme.text}] text-[1.1rem]`}
            codeTextStyle={tw`text-[${theme.text}]`}
          />
      </View>
    </>
  );
};

export default PhonePicker