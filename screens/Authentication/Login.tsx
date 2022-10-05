import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../../components/Button";
import LineText from "../../components/LineText";
import { Theme } from "../../types";
import themeContext from "../../components/config/themeContext";
import { useContext } from "react";

interface Props {
  provider: string;
  Icon: any;
  onPress?: () => void;
}

const AuthProvider = ({ provider, Icon, onPress }: Props) => {

  const theme: Theme = useContext(themeContext);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={tw`w-full flex-row items-center justify-center h-13 bg-[${theme.input_base}] border border-[${theme.border}] rounded-2xl mb-3`}
    >
      {Icon}
      <Text style={tw`text-[${theme.text}] font-bold`}>{provider}</Text>
    </TouchableOpacity>
  );
};

const Login = ({ navigation }: any) => {

  const theme: Theme = useContext(themeContext);

  return (
    <SafeAreaView style={tw`flex-1 bg-[${theme.base}] items-center justify-center`}>
      <View>
        <Image source={theme.mode ? require("../../assets/login.png") : require("../../assets/light-login.png")} />
      </View>

      <View style={tw`px-4 mb-6`}>
        <Text style={tw`text-[${theme.text}] text-5xl`}>Let's you in</Text>
      </View>

      <View style={tw`w-full px-4`}>
        <AuthProvider
          Icon={
            <FontAwesome5
              name="facebook"
              size={26}
              color="#0c86e1"
              style={tw`mr-2`}
            />
          }
          provider="Continue with Facebook"
        />
        <AuthProvider
          Icon={
            <FontAwesome5
              name="google"
              size={26}
              color="#fbbc05"
              style={tw`mr-2`}
            />
          }
          provider="Continue with Google"
        />
        <AuthProvider
          Icon={
            <FontAwesome5
              name="apple"
              size={26}
              color={theme.text}
              style={tw`mr-2`}
            />
          }
          provider="Continue with Apple"
        />
      </View>

      <LineText text="or" />

      <Button
        onPress={() => navigation.navigate("PasswordLogin")}
        text={"text-sm"}
        style={"mt-4"}
        title="Sign in with password"
      />

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
    </SafeAreaView>
  );
};

export default Login;
