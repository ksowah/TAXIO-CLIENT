import { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import { FontAwesome5 } from '@expo/vector-icons';
import { Theme } from '../types';
import themeContext from './config/themeContext';

const CheckBox = () => {

    const [isChecked, setIsChecked] = useState<Boolean | number>(false)

    const theme: Theme = useContext(themeContext)

  return (
    <View style={tw`flex-row items-center`}>
      <TouchableOpacity activeOpacity={.5} onPress={() => setIsChecked(!isChecked)} style={tw`border-2 items-center justify-center rounded-[6px] mr-2 h-5 w-5 border-[#febb1b] ${isChecked && "bg-[#febb1b]"}`}>
            {isChecked && <FontAwesome5 name="check" size={12} color="white" />}
      </TouchableOpacity>
      <Text style={tw`text-[${theme.text}] text-sm`}>Remember me</Text>
    </View>
  );
}


export default CheckBox;