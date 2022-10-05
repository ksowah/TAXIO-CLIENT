import { useContext, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import tw from "twrnc";
import themeContext from "../../../components/config/themeContext";
import PlacesInputAutoComplete from "../../../components/PlacesInputAutoComplete";
import { Theme } from "../../../types";

const SearchLocation = () => {

    const [isSelected, setIsSelected] = useState(false)

    const theme: Theme = useContext(themeContext)

  return (
    <SafeAreaView style={tw`flex-1 px-2 bg-[${theme.base}] px-4`}>
      <View style={tw`rounded-2xl items-center flex-row`}>
        {/* <Feather name="search" style={tw`ml-2`} size={24} color={theme.fade_text} /> */}
        <PlacesInputAutoComplete setIsSelected={setIsSelected} />
      </View>
      <View style={tw`flex-row items-center justify-between mt-4 px-2 w-full`}>
        <Text style={tw`font-bold text-[1.5rem] text-[${theme.text}]`}>
          Recents
        </Text>

        <Text style={tw`font-bold text-[1.1rem] text-[${theme.yellow}]`}>
          Clear All
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SearchLocation;
