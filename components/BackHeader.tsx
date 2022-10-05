import { TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '../types';
import themeContext from './config/themeContext';
import { useContext } from "react"

interface Props {
  title?: string
  navigation?: any
}

const BackHeader = ({navigation, title}: Props) => {

  const theme: Theme = useContext(themeContext)

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={.5}
     style={tw`flex-row items-center mt-4 justify-start w-full w-full h-20 px-4`}>
      <Ionicons name="arrow-back" size={26} color={theme.text} />
      <Text style={tw`text-[${theme.text}] font-bold text-[1.5rem] ml-2`}>{title}</Text>
    </TouchableOpacity>
  );
}


export default BackHeader;