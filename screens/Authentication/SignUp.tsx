import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Input } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRef, useState } from "react";
import CheckBox from "../../components/CheckBox";
import Button from "../../components/Button";
import LineText from "../../components/LineText";
import BackHeader from "../../components/BackHeader";

const SignUp = ({navigation}: any) => {

    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef(null)

  const ProviderCube = ({ Icon }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={tw`w-20 h-16 bg-[#1F222A] mr-4 rounded-2xl items-center justify-center`}
      >
        {Icon}
      </TouchableOpacity>
    );
  };


  return (
    <SafeAreaView style={tw`flex-1 bg-[#181A20]`}>
      <BackHeader />

      <View style={tw`flex-1 bg-[#181A20] items-start justify-center`}>
        <View style={tw`px-4 mb-14`}>
          <Text style={tw`text-white text-5xl`}>Create your Account</Text>
        </View>

        <View style={tw`px-1 w-full mb-8`}>
          <Input
            ref={inputRef}
            containerStyle={tw`w-full`}
            inputContainerStyle={tw`border-b-0 bg-[#1F222A] h-13 rounded-2xl px-2 text-center`}
            placeholder={"Email"}
            placeholderTextColor={"#797a7c"}
            autoComplete="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            inputStyle={tw`text-white`}
            autoCorrect={false}
            returnKeyType="next"
            returnKeyLabel="next"
            leftIcon={<MaterialIcons name="email" size={24} color="#9e9e9e" />}
            // onChangeText={(phoneNumber) => setPhone(phoneNumber)}
            // value={phone}
          />

          <Input
            containerStyle={tw`w-full`}
            inputContainerStyle={tw`border-b-0 bg-[#1F222A] h-13 rounded-2xl px-2 text-center`}
            placeholder={"Password"}
            inputStyle={tw`text-white`}
            placeholderTextColor={"#797a7c"}
            keyboardType="default"
            textContentType="password"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            returnKeyLabel="next"
            leftIcon={<FontAwesome name="lock" size={24} color="#9e9e9e" />}
            // onChangeText={(phoneNumber) => setPhone(phoneNumber)}
            // value={phone}
          />

          <View style={tw`w-full items-center justify-center mb-6 mt-2`}>
            <CheckBox />
          </View>

          <Button title="Sign up" text={"text-sm"} />
        </View>

        <View style={tw`px-4 w-full`}>
          <LineText text="or continue with" />
        </View>

        <View style={tw`flex-row w-full items-center justify-center mt-4`}>
          <ProviderCube
            Icon={<FontAwesome5 name="facebook" size={26} color="#0c86e1" />}
          />
          <ProviderCube
            Icon={<FontAwesome5 name="google" size={26} color="#fbbc05" />}
          />
          <ProviderCube
            Icon={<FontAwesome5 name="apple" size={26} color="#fff" />}
          />
        </View>

        <View style={tw`w-full items-center justify-center`}>
        <Text style={tw`text-white mt-6`}>
          Already have an account? 
          <Text style={tw`text-[#c18f1c]`} onPress={() => navigation.navigate("Login")}> Sign in</Text>
        </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
