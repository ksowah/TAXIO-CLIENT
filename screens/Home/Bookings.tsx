import { useContext } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import themeContext from '../../components/config/themeContext';
import { Theme } from '../../types';
import { Feather } from '@expo/vector-icons';
import TopTabs from '../../components/bookings';


const Bookings = () => {

  const theme: Theme = useContext(themeContext);

  return (
    <SafeAreaView style={tw`flex-1 bg-[${theme.base}]`}>
      <View style={tw`flex-row items-center justify-between p-4`}>
        <View style={tw`flex-row items-center`}>
          <Image source={require("../../assets/bookings.png")}/>
          <Text style={tw`text-[${theme.text}] font-bold text-[1.5rem] ml-2`}>My Bookings</Text>
        </View>

        <View style={tw`flex-row items-center`}>
          <Feather name="search" size={24} color={theme.text} />
          <TouchableOpacity activeOpacity={.5} style={tw`border-2 ml-4 border-[${theme.text}] rounded-full`}>
            <Feather name="more-horizontal" size={18} color={theme.text} />
          </TouchableOpacity>
        </View>
      </View>

      <TopTabs />
    </SafeAreaView>
  );
}


export default Bookings;