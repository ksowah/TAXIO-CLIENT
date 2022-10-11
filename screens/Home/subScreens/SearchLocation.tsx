import { useContext, useState } from "react";
import { View, Text, SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";
import tw from "twrnc";
import themeContext from "../../../components/config/themeContext";
import PlacesInputAutoComplete from "../../../components/PlacesInputAutoComplete";
import { Theme } from "../../../types";

const SearchLocation = ({navigation}: any) => {

    const [isSelected, setIsSelected] = useState(false)

    const theme: Theme = useContext(themeContext)

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <SafeAreaView style={tw`flex-1 bg-[${theme.base}]`}>
      <View style={tw`flex-1 p-2`}>
        <View style={tw`rounded-2xl items-center flex-row`}>
          {/* <Feather name="search" style={tw`ml-2`} size={24} color={theme.fade_text} /> */}
          <PlacesInputAutoComplete navigation={navigation} setIsSelected={setIsSelected} />
        </View>
        <View style={tw`flex-row items-center justify-between mt-4 px-2 w-full`}>
          <Text style={tw`font-bold text-[1.5rem] text-[${theme.text}]`}>
            Recents
          </Text>

          <Text style={tw`font-bold text-[1.1rem] text-[${theme.yellow}]`}>
            Clear All
          </Text>
        </View>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SearchLocation;
