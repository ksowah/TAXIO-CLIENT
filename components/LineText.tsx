import { View, Text } from 'react-native';
import tw from 'twrnc'

interface Props {
    text: string
}

const LineText = ({text}: Props) => {
  return (
    <View style={tw`flex w-full border-b border-[#282a31] items-center my-4 justify-center`}>
      <Text style={tw`text-white text-[16px] -mb-2 px-1 bg-[#181a20]`}>{text}</Text>
    </View>
  );
}


export default LineText;