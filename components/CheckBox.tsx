import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import { FontAwesome5 } from '@expo/vector-icons';

const CheckBox = () => {

    const [isChecked, setIsChecked] = useState<Boolean | number>(false)

  return (
    <View style={tw`flex-row items-center`}>
      <TouchableOpacity activeOpacity={.5} onPress={() => setIsChecked(!isChecked)} style={tw`border-2 items-center justify-center rounded-[6px] mr-2 h-5 w-5 border-[#febb1b] ${isChecked && "bg-[#febb1b]"}`}>
            {isChecked && <FontAwesome5 name="check" size={12} color="white" />}
      </TouchableOpacity>
      <Text style={tw`text-white text-sm`}>Remember me</Text>
    </View>
  );
}


export default CheckBox;