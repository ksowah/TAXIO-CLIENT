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
  import { FontAwesome } from "@expo/vector-icons";
  import { FORGOT_PASSWORD } from "../../../mutations/forgotPasswordMutation";
import { CHANGE_PASSWORD } from "../../../mutations/changePasswordMutation";
import ModalPoup from "../../../components/ModalPopup";
import { Theme } from "../../../types";
import themeContext from "../../../components/config/themeContext";
  
  const ForgotPassword = ({ route, navigation }: any) => {
    const inputRef = useRef(null);
  
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [showModal, setShowModal] = useState(false)

    const theme: Theme = useContext(themeContext)

    const { verificationCode } = route.params; 

    const [changePassword, { loading }] = useMutation(CHANGE_PASSWORD, {
      variables: { data: {password, code: verificationCode} },
    });
  

    const ChangePassword = () => {
        if(password !== password2) {
            alert("Passwords do not match");
            return;
        }else{
            changePassword()
            .then((res) => {
                console.log(res);
                setShowModal(true)
                setPassword("");
                setPassword2("");
            })
            .catch((err) => {
                console.log(err.message);
                alert(err.message);
            });
        }
    }
  
    return (
      <KeyboardAvoidingView behavior="padding" style={tw`flex-1 w-full`}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={tw`flex-1 bg-[${theme.base}]`}>
            <BackHeader title="Create New Password" navigation={navigation} />

            <ModalPoup
            onPress={() => {
              setShowModal(false)
              navigation.replace("PasswordLogin");
            }}
            setShowModal={setShowModal}
            showModal={showModal}
            image={require("../../../assets/password-reset.png")}
            title={"Congratulations!"}
            subTitle={"Your password has been reset successfully!"}
          />
  
            <View style={tw`flex-1 bg-[${theme.base}] items-start`}>
              <View style={tw`w-full items-center mb-4`}>
                <Image source={theme.mode ? require("../../../assets/change-password.png") : require("../../../assets/lightTheme/light-change-password.png")} />
              </View>
  
              <Text style={tw`text-[${theme.text}] px-4 text-[16px] mb-6`}>
                  Create your new password
              </Text>
  
              <View style={tw`px-1 w-full mb-8 items-center`}>
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
                onChangeText={(password) => setPassword2(password)}
                value={password2}
                onSubmitEditing={ChangePassword}
              />
  
                <Button onPress={ChangePassword} loading={loading} title="Continue" text={"text-sm"} />
              </View>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  };
  
  export default ForgotPassword;
  