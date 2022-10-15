import { Avatar } from "@rneui/base";
import { useContext } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import BackHeader from "../../components/BackHeader";
import themeContext from "../../components/config/themeContext";
import { Theme } from "../../types";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';


const DriverProfile = ({ navigation }: any) => {
  const theme: Theme = useContext(themeContext);

  return (
    <SafeAreaView style={tw`flex-1 bg-[${theme.base}]`}>
        <ScrollView>
      <BackHeader title="Driver Details" navigation={navigation} />

      <View style={tw`items-center justify-center`}>
        <Avatar rounded size={120} source={require("../../assets/kevin.jpg")} />

        <Text
          style={tw`text-[${theme.text}] text-[1.2rem] font-bold mb-2 my-4`}
        >
          Kelvin Sowah
        </Text>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-[${theme.text}] text-[.9rem] mb-2 mr-2`}>
            +233-201-691-4321
          </Text>
          <Ionicons name="copy" size={18} color={theme.yellow} />
        </View>
      </View>

      <View style={tw`w-full h-[9rem] px-4 mt-4`}>
        <View
          style={tw`flex-row items-center justify-evenly w-full h-full rounded-3xl bg-[${theme.base_light_shade}]`}
        >
          <View style={tw`items-center justify-center`}>
            <View
              style={tw`h-[3.5rem] w-[3.5rem] mb-2 items-center justify-center rounded-full bg-[${theme.yellow}]`}
            >
              <FontAwesome5 name="star-half-alt" size={24} color={"#181a20"} />
            </View>
            <Text
              style={tw`text-[${theme.text}] font-bold text-[.9rem] mb-2 mr-2`}
            >
              4.8
            </Text>
            <Text style={tw`text-[${theme.fade_text}] text-[0.8rem]`}>
              Ratings
            </Text>
          </View>

          <View style={tw`items-center justify-center`}>
            <View
              style={tw`h-[3.5rem] w-[3.5rem] mb-2 items-center justify-center rounded-full bg-[${theme.yellow}]`}
            >
              <FontAwesome5 name="taxi" size={24} color={"#181a20"} />
            </View>
            <Text
              style={tw`text-[${theme.text}] font-bold text-[.9rem] mb-2 mr-2`}
            >
              279
            </Text>
            <Text style={tw`text-[${theme.fade_text}] text-[0.8rem]`}>
              Trips
            </Text>
          </View>

          <View style={tw`items-center justify-center`}>
            <View
              style={tw`h-[3.5rem] w-[3.5rem] mb-2 items-center justify-center rounded-full bg-[${theme.yellow}]`}
            >
              <FontAwesome5 name="star-half-alt" size={24} color={"#181a20"} />
            </View>
            <Text
              style={tw`text-[${theme.text}] font-bold text-[.9rem] mb-2 mr-2`}
            >
              5
            </Text>
            <Text style={tw`text-[${theme.fade_text}] text-[0.8rem]`}>
              years
            </Text>
          </View>
        </View>
      </View>

      <View style={tw`w-full h-[9rem] px-4 mt-4`}>
        <View
          style={tw`items-center justify-center w-full h-full rounded-3xl bg-[${theme.base_light_shade}]`}
        >
          <View style={tw`flex-row w-full items-center justify-between px-4`}>
            <Text style={tw`text-[${theme.fade_text}] text-[0.9rem]`}>
              Member Since
            </Text>
            <Text
              style={tw`text-[${theme.text}] font-bold text-[.9rem] mb-2 mr-2`}
            >
              July 15, 2019
            </Text>
          </View>
          <View style={tw`flex-row w-full items-center justify-between px-4`}>
            <Text style={tw`text-[${theme.fade_text}] text-[0.9rem]`}>
              Car Model
            </Text>
            <Text
              style={tw`text-[${theme.text}] font-bold text-[.9rem] mb-2 mr-2`}
            >
              Mercedes-Benze E-Class
            </Text>
          </View>
          <View style={tw`flex-row w-full items-center justify-between px-4`}>
            <Text style={tw`text-[${theme.fade_text}] text-[0.9rem]`}>
            Plate Number
            </Text>
            <Text
              style={tw`text-[${theme.text}] font-bold text-[.9rem] mb-2 mr-2`}
            >
              HSW 4736 XK
            </Text>
          </View>
        </View>
      </View>

      <View style={tw`flex-row items-center justify-center mt-10 py-6 border-t border-[${theme.border}]`}>
             
              <TouchableOpacity
                activeOpacity={.5}
                style={tw`h-16 w-16 bg-[${theme.yellow}] mr-4 rounded-full items-center justify-center`}
              >
                <Ionicons name="chatbubble-ellipses-sharp" size={26} color="#181a20" />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={.5}
                style={tw`h-16 w-16 bg-[${theme.yellow}] rounded-full items-center justify-center`}
              >
                <FontAwesome name="phone" size={26} color="#181a20"/>
              </TouchableOpacity>
            </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DriverProfile;
