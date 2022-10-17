import { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc'
import { Theme } from '../../types';
import themeContext from '../config/themeContext';

const ActiveNow = () => {

    const theme: Theme = useContext(themeContext);

  return (
    <View style={tw`flex-1 bg-[${theme.base}]`}>

        <View style={tw`flex-1 items-center justify-center px-4`}>
            <Image source={theme.mode ? require("../../assets/no-data.png") : require("../../assets/lightTheme/no-data.png")} />
            <Text style={tw`text-[1.1rem] font-bold text-center text-[${theme.text}]`}>You have no active taxi booking</Text>
            <Text style={tw`text-[.9rem] text-center text-[${theme.fade_text}] mt-4`}>You dont have an active taxi booking at this time</Text>
        </View>

    </View>
  );
}


export default ActiveNow;