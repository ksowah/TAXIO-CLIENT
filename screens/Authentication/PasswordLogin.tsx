import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import tw from "twrnc";
import { Input } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRef, useState, useContext } from "react";
import CheckBox from "../../components/CheckBox";
import Button from "../../components/Button";
import LineText from "../../components/LineText";
import BackHeader from "../../components/BackHeader";
import { useMutation, useQuery } from "@apollo/client";
import { LOGIN } from "../../mutations/loginMutation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ME_QUERY } from "../../queries/meQuery";
import { Theme } from "../../types";
import themeContext from "../../components/config/themeContext";

const PasswordLogin = ({ navigation }: any) => {
  const inputRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const theme: Theme = useContext(themeContext);


  const ProviderCube = ({ Icon }: any) => {

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={tw`w-20 h-16 bg-[${theme.input_base}] border border-[${theme.border}] mr-4 rounded-2xl items-center justify-center`}
      >
        {Icon}
      </TouchableOpacity>
    );
  };

  // get session
  const { data: session } = useQuery(ME_QUERY);

  const [login, { loading }] = useMutation(LOGIN, {
    variables: { password, email },
  });

  const Login = () => {
    login()
      .then((res) => {
        setEmail("");
        setPassword("");
        AsyncStorage.setItem("accessToken", res.data.login.token);
      }).then(() => {
        navigation.replace(!session?.me?.profileUpdated ? "UpdateProfile": "BaseHome");
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={tw`flex-1 w-full`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={tw`flex-1 bg-[${theme.base}]`}>
          <BackHeader navigation={navigation}/>

          <View style={tw`flex-1 bg-[${theme.base}] items-start justify-center`}>
            <View style={tw`px-4 mb-14`}>
              <Text style={tw`text-[${theme.text}] text-5xl`}>Login to your Account</Text>
            </View>

            <View style={tw`px-1 w-full mb-8`}>
              <Input
                ref={inputRef}
                containerStyle={tw`w-full`}
                inputContainerStyle={tw`border-b-0 bg-[${theme.input_base}] h-13 rounded-2xl px-2 text-center`}
                placeholder={"Email"}
                placeholderTextColor={"#797a7c"}
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoComplete="email"
                inputStyle={tw`text-[${theme.text}]`}
                autoCorrect={false}
                returnKeyType="next"
                leftIcon={
                  <MaterialIcons name="email" size={24} color="#9e9e9e" />
                }
                onChangeText={(email) => setEmail(email)}
                value={email}
              />

              <Input
                containerStyle={tw`w-full`}
                inputContainerStyle={tw`border-b-0 bg-[${theme.input_base}] h-13 rounded-2xl px-2 text-center`}
                placeholder={"Password"}
                inputStyle={tw`text-[${theme.text}]`}
                placeholderTextColor={"#797a7c"}
                keyboardType="default"
                textContentType="password"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                returnKeyLabel="next"
                secureTextEntry
                leftIcon={<FontAwesome name="lock" size={24} color="#9e9e9e" />}
                onChangeText={(password) => setPassword(password)}
                value={password}
                onSubmitEditing={Login}
              />

              <View style={tw`w-full items-center justify-center mb-6 mt-2`}>
                <CheckBox />
              </View>

              <Button onPress={Login} loading={loading} title="Sign in" text={"text-sm"} />

              <Text onPress={() => navigation.navigate("ForgotPassword")} style={tw`text-[#e7ab1b] mt-4 text-center`}>
                Forgot the password?
              </Text>
            </View>

            <View style={tw`px-4 w-full`}>
              <LineText text="or continue with" />
            </View>

            <View style={tw`flex-row w-full items-center justify-center mt-4`}>
              <ProviderCube
                Icon={
                  <FontAwesome5 name="facebook" size={26} color="#0c86e1" />
                }
              />
              <ProviderCube
                Icon={<FontAwesome5 name="google" size={26} color="#fbbc05" />}
              />
              <ProviderCube
                Icon={<FontAwesome5 name="apple" size={26} color={theme.text} />}
              />
            </View>

            <View style={tw`w-full items-center justify-center`}>
              <Text style={tw`text-[${theme.fade_text}] mt-6`}>
                Don't have an account?
                <Text
                  style={tw`text-[#c18f1c]`}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  {" "}
                  Sign up
                </Text>
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PasswordLogin;
