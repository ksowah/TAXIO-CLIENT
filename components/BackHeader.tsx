import { TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';

const BackHeader = ({navigation}: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={.5} style={tw`flex w-full h-20 justify-center px-4`}>
      <Ionicons name="arrow-back" size={26} color="white" />
    </TouchableOpacity>
  );
}


export default BackHeader;