import { View, Text } from 'react-native';
import tw from 'twrnc'
import { Theme } from '../types';
import themeContext from './config/themeContext';
import { useContext } from "react"

interface Props {
    text: string
}

const LineText = ({text}: Props) => {

  const theme: Theme = useContext(themeContext)

  return (
    <View style={tw`flex w-full border-b border-[${theme.border}] items-center my-4 justify-center`}>
      <Text style={tw`text-[${theme.text}] text-[16px] -mb-2 px-1 bg-[${theme.base}]`}>{text}</Text>
    </View>
  );
}


export default LineText;