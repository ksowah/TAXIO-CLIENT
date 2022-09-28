import { useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import tw from "twrnc";
import BackHeader from "../../../components/BackHeader";
import Button from "../../../components/Button";
import { CONFIRM_CHANGE_PASSWORD } from "../../../mutations/confirmChangePasswordMutation";

const VerifyEmail = ({route, navigation}: any) => {
  const firstInput: any = useRef();
  const secondInput: any = useRef();
  const thirdInput: any = useRef();
  const fourthInput: any = useRef();

  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "" });

  const { email } = route.params
  const [Email, setEmail] = useState(email)

  const verificationCode = `${otp[1] + otp[2] + otp[3] + otp[4]}`;

  const [confirmChangePassword, { loading }] = useMutation(CONFIRM_CHANGE_PASSWORD, {
    variables: { code: verificationCode, email },
  });

  const verifyChangePassword = () => {
    if(verificationCode === ""){
      alert("Please enter verification code")
    }else{
        confirmChangePassword().then((res) => {
            console.log(res.data)            
            navigation.replace("ChangePassword", {verificationCode})
            setOtp({ 1: "", 2: "", 3: "", 4: "", });
        }).catch((err) => {
          console.log(err.message)
          alert(err.message)
        })
    }
  }


  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={tw`flex-1 bg-[#181A20]`}>

        <View style={tw`h-[60%] justify-between`}>
        <BackHeader title="Enter Verification Code" />
        <Text style={tw`text-white text-center text-[1.1rem]`}>
          Enter the verification code we just sent to <Text style={tw`text-[#FEBB1B]`}>{Email}</Text>
        </Text>

        <View
          style={tw`mx-[20px] my-[20px] justify-evenly items-center flex-row`}
        >
          <View style={tw`rounded-lg border border-[#c9961c]`}>
            <TextInput
              secureTextEntry
              ref={firstInput}
              keyboardType="number-pad"
              maxLength={1}
              style={tw`text-[25px] text-white p-0 text-center px-[20px] py-[10p]`}
              onChangeText={(text) => {
                setOtp({ ...otp, 1: text });
                text && secondInput.current.focus();
              }}
            />
          </View>

          <View style={tw`rounded-lg border border-[#c9961c]`}>
            <TextInput
              secureTextEntry
              ref={secondInput}
              keyboardType="number-pad"
              maxLength={1}
              style={tw`text-[25px] text-white p-0 text-center px-[20px] py-[10p]`}
              onChangeText={(text) => {
                setOtp({ ...otp, 2: text });
                text ? thirdInput.current.focus() : firstInput.current.focus();
              }}
            />
          </View>

          <View style={tw`rounded-lg border border-[#c9961c]`}>
            <TextInput
              secureTextEntry
              ref={thirdInput}
              keyboardType="number-pad"
              maxLength={1}
              style={tw`text-[25px] text-white p-0 text-center px-[20px] py-[10p]`}
              onChangeText={(text) => {
                setOtp({ ...otp, 3: text });
                text
                  ? fourthInput.current.focus()
                  : secondInput.current.focus();
              }}
            />
          </View>

          <View style={tw`rounded-lg border border-[#c9961c]`}>
            <TextInput
              secureTextEntry
              ref={fourthInput}
              keyboardType="number-pad"
              maxLength={1}
              style={tw`text-[25px] text-white p-0 text-center px-[20px] py-[10p]`}
              onChangeText={(text) => {
                setOtp({ ...otp, 4: text });
                !text && thirdInput.current.focus();
              }}
              onSubmitEditing={verifyChangePassword}
            />
          </View>
        </View>
        <Button onPress={verifyChangePassword} title="Continue" />

        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
  );
};

export default VerifyEmail;
