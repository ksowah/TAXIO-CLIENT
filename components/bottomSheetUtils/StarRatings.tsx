import { useContext } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc'
import { Theme } from '../../types';
import themeContext from '../config/themeContext';

const StarRatings = () => {

    const theme: Theme = useContext(themeContext)

  return (
    <View style={tw`w-full border-b border-[${theme.border}] items-center justify-center py-4`}>
      <Text style={tw`text-[${theme.text}] font-bold text-xl`}>How is your Driver?</Text>
      <Text style={tw`text-[${theme.fade_text}] text-[0.9rem]`}>Please rate your driver...</Text>
    </View>
  );
}


export default StarRatings;