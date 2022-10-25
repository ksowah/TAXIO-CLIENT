import { TouchableOpacity, Text, View } from 'react-native';
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '../types';
import themeContext from './config/themeContext';
import { useContext } from "react"
import { Feather, AntDesign } from '@expo/vector-icons';

interface Props {
  title?: string
  navigation?: any
  icons?: boolean
}

const BackHeader = ({navigation, title, icons}: Props) => {

  const theme: Theme = useContext(themeContext)

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={.5}
     style={tw`flex-row items-center mt-4 justify-between w-full w-full h-20 px-4`}>
      <View style={tw`flex-row items-center`}>
        <Ionicons name="arrow-back" size={26} color={theme.text} />
        <Text style={tw`text-[${theme.text}] font-bold text-[1.5rem] ml-2`}>{title}</Text>
      </View>

      {
        icons && (
          <View style={tw`flex-row`}>
          <AntDesign name="phone" size={24} color={theme.fade_text} />
          <TouchableOpacity activeOpacity={.5} style={tw`border-2 ml-4 border-[${theme.fade_text}] rounded-full`}>
            <Feather name="more-horizontal" size={18} color={theme.fade_text} />
          </TouchableOpacity>
        </View>
        )
      }
    </TouchableOpacity>
  );
}


export default BackHeader;