import { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import { Feather } from '@expo/vector-icons';
import { Theme } from '../types';
import themeContext from './config/themeContext';

const TabsHeader = ({title} : {title: string}) => {

    const theme: Theme = useContext(themeContext)

  return (
    <View style={tw`flex-row items-center justify-between p-4`}>
        <View style={tw`flex-row items-center`}>
          <Image source={require("../assets/bookings.png")}/>
          <Text style={tw`text-[${theme.text}] font-bold text-[1.5rem] ml-2`}>{title}</Text>
        </View>

        <View style={tw`flex-row items-center`}>
          <Feather name="search" size={24} color={theme.text} />
          <TouchableOpacity activeOpacity={.5} style={tw`border-2 ml-4 border-[${theme.text}] rounded-full`}>
            <Feather name="more-horizontal" size={18} color={theme.text} />
          </TouchableOpacity>
        </View>
      </View>

  );
}


export default TabsHeader;