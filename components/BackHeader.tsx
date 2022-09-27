import { TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';


interface Props {
  title?: string
  navigation?: any
}

const BackHeader = ({navigation, title}: Props) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={.5}
     style={tw`flex-row items-center mt-4 justify-start w-full w-full h-20 px-4`}>
      <Ionicons name="arrow-back" size={26} color="white" />
      <Text style={tw`text-white font-bold text-[1.5rem] ml-2`}>{title}</Text>
    </TouchableOpacity>
  );
}


export default BackHeader;