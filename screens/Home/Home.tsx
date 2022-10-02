import { Text, View, SafeAreaView } from "react-native"
import tw from "twrnc"
import BottomSheetComponent from "../../components/BottomSheet"

const Home = ({navigation}: any) => {
  return (
    <View style={tw`flex-1`}>
        <BottomSheetComponent />
    </View>
  )
}

export default Home