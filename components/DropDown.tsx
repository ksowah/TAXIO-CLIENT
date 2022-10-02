import { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import tw from "twrnc"


const DropDown = ({setGenderValue, genderValue}: any) => {
  const [genderOpen, setGenderOpen] = useState(false);
  const [gender, setGender] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Prefer Not to Say", value: "neutral" },
  ]);


  return (
    <View style={tw`w-full px-2`}>
      <DropDownPicker
        style={tw`bg-[#1F222A] border-0 rounded-2xl`}
        open={genderOpen}
        value={genderValue} //genderValue
        items={gender}
        setOpen={setGenderOpen}
        setValue={setGenderValue}
        setItems={setGender}
        placeholder="Gender"
        placeholderStyle={tw`text-[#797a7c]`}
        onChangeValue={(value) => setGenderValue(value)}
        zIndex={3000}
        zIndexInverse={1000}
        textStyle={tw`text-[#fff] text-[1.1rem]`}
        dropDownContainerStyle={tw`bg-[#1F222A] border-0`}
      />
    </View>
  );
};

export default DropDown;
