import { useState, useContext } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import tw from "twrnc"
import { Theme } from "../types";
import themeContext from "./config/themeContext";


const DropDown = ({setGenderValue, genderValue}: any) => {
  const [genderOpen, setGenderOpen] = useState(false);
  const [gender, setGender] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Prefer Not to Say", value: "neutral" },
  ]);

  const theme: Theme = useContext(themeContext)

  return (
    <View style={tw`w-full px-2`}>
      <DropDownPicker
        style={tw`bg-[${theme.input_base}] border-0 rounded-2xl`}
        open={genderOpen}
        value={genderValue} //genderValue
        items={gender}
        setOpen={setGenderOpen}
        setValue={setGenderValue}
        setItems={setGender}
        placeholder="Gender"
        placeholderStyle={tw`text-[${theme.text}]`}
        onChangeValue={(value) => setGenderValue(value)}
        zIndex={3000}
        zIndexInverse={1000}
        textStyle={tw`text-[${theme.text}] text-[1.1rem]`}
        dropDownContainerStyle={tw`bg-[${theme.input_base}] border-0`}
      />
    </View>
  );
};

export default DropDown;
