import { useContext } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import themeContext from '../../components/config/themeContext';
import { Theme } from '../../types';
import { Feather } from '@expo/vector-icons';
import TopTabs from '../../components/bookings';
import TabsHeader from '../../components/TabsHeader';


const Bookings = () => {

  const theme: Theme = useContext(themeContext);

  return (
    <SafeAreaView style={tw`flex-1 bg-[${theme.base}]`}>
      <TabsHeader title='My Bookings' />
      <TopTabs />
    </SafeAreaView>
  );
}


export default Bookings;