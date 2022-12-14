import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import tw from "twrnc";
import { Input } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { useRef, useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import BackHeader from "../../../components/BackHeader";
import Button from "../../../components/Button";
import { FORGOT_PASSWORD } from "../../../mutations/forgotPasswordMutation";
import { Theme } from "../../../types";
import themeContext from "../../../components/config/themeContext";

const ForgotPassword = ({ navigation }: any) => {
  const inputRef = useRef(null);

  const [email, setEmail] = useState("");

  const theme: Theme = useContext(themeContext)

  const [forgotPassword, { loading }] = useMutation(FORGOT_PASSWORD, {
    variables: { email },
  });

  const proceedToVerify = () => {
    if(email === ""){
      alert("Please enter your email")
    }else{
        forgotPassword().then((res) => {
            console.log(res.data)            
            navigation.navigate("VerifyEmail", {email})
            setEmail("");
        })
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={tw`flex-1 w-full`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={tw`flex-1 bg-[${theme.base}]`}>
          <BackHeader title="Forgot Password" navigation={navigation} />

          <View style={tw`flex-1 bg-[${theme.base}] items-start`}>
            <View style={tw`w-full items-center mb-4`}>
              <Image source={theme.mode ? require("../../../assets/forgot-password.png") : require("../../../assets/lightTheme/light-forgot-password.png")} />
            </View>

            <Text style={tw`text-[${theme.text}] px-4 text-[16px] mb-6 text-center`}>
                Enter your email address and we will send you a verification code to reset your password.
            </Text>

            <View style={tw`px-1 w-full mb-8 items-center`}>
              <Input
                ref={inputRef}
                containerStyle={tw`w-full mb-4`}
                inputContainerStyle={tw`border-b-0 bg-[${theme.input_base}] h-13 rounded-2xl px-2 text-center`}
                placeholder={"Email"}
                placeholderTextColor={"#797a7c"}
                autoComplete="email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                inputStyle={tw`text-[${theme.text}]`}
                autoCorrect={false}
                returnKeyType="next"
                returnKeyLabel="next"
                leftIcon={
                  <MaterialIcons name="email" size={24} color="#9e9e9e" />
                }
                onChangeText={(email) => setEmail(email)}
                value={email}
                onSubmitEditing={proceedToVerify}
              />

              <Button loading={loading} onPress={proceedToVerify} title="Continue" text={"text-sm"} />
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
