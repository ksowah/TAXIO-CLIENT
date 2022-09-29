import { Avatar } from "@rneui/base";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  Platform,
} from "react-native";
import tw from "twrnc";
import BackHeader from "../../components/BackHeader";
import Button from "../../components/Button";
import { FontAwesome } from "@expo/vector-icons";
import { Input } from "@rneui/themed";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

const UpdateProfile = ({ navigation }: any) => {
  const [date, setDate] = useState<Date>(new Date());
  const [mode, setMode] = useState<any>('date');
  const [dateValue, setdateValue] = useState('');
  const [show, setShow] = useState(false);
  const [isClicked, setIsClicked] = useState<any>(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = (tempDate.getMonth() + 1) + "/" + tempDate.getDate() + "/" + tempDate.getFullYear();
    setdateValue(fDate);
    setIsClicked(true)
    console.log(currentDate)
    
  };

  const showMode = (currentMode: any) => {
    if (Platform.OS === 'android') {
      setShow(false);
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setShow(!show)  
  };

  const DatePicker = () => {
    return (
      <TouchableOpacity onPress={showDatepicker} activeOpacity={1} style={tw`w-full h-13 px-2 mb-6`}>
        <View style={tw`w-full flex-row h-full bg-[#1F222A] rounded-2xl items-center`}>
          <View style={tw`flex-1 h-full items-start justify-center px-2`}>
            <Text style={tw`text-center text-[#797a7c] text-[1.1rem] ${isClicked && "text-white"}`}>{isClicked ? dateValue : "Date of Birth"}</Text>
          </View>

          <View style={tw`h-full flex-row w-[3.5rem] items-center justify-end pr-3`}>
              <FontAwesome name="calendar" size={24} color="#636568" />
          </View>
        </View>

        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          onChange={onChange}
          themeVariant="dark"
          positiveButtonLabel="Done"
        />
      )}
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={tw`flex-1 w-full`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={tw`flex-1 bg-[#181A20]`}>
          <BackHeader title="Fill your profile" />

          <View style={tw`w-full items-center`}>
            <View style={tw`relative w-[10rem] my-4 `}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={tw`absolute z-50 bg-[#FEBB1B] p-2 rounded-lg bottom-0 right-6`}
              >
                <FontAwesome name="pencil" size={24} color="black" />
              </TouchableOpacity>
              <Avatar
                rounded
                size={130}
                source={require("../../assets/profile-avatar.png")}
                containerStyle={tw`bg-[#464648]`}
              />
            </View>
            <View style={tw`w-full px-1`}>
              <Input
                containerStyle={tw`w-full`}
                inputContainerStyle={tw`border-b-0 bg-[#1F222A] h-13 rounded-2xl px-2 text-center`}
                placeholder={"First Name"}
                placeholderTextColor={"#797a7c"}
                keyboardType="default"
                textContentType="name"
                autoComplete="name"
                inputStyle={tw`text-white`}
                returnKeyType="next"
                // onChangeText={(email) => setEmail(email)}
                // value={email}
              />

              <Input
                containerStyle={tw`w-full`}
                inputContainerStyle={tw`border-b-0 bg-[#1F222A] h-13 rounded-2xl px-2 text-center`}
                placeholder={"Last Name"}
                placeholderTextColor={"#797a7c"}
                keyboardType="default"
                textContentType="name"
                autoComplete="name"
                inputStyle={tw`text-white`}
                returnKeyType="next"
                // onChangeText={(email) => setEmail(email)}
                // value={email}
              />

              <DatePicker />

              <Input
                containerStyle={tw`w-full`}
                inputContainerStyle={tw`border-b-0 bg-[#1F222A] h-13 rounded-2xl px-2 text-center`}
                placeholder={"First Name"}
                placeholderTextColor={"#797a7c"}
                keyboardType="default"
                textContentType="name"
                autoComplete="name"
                inputStyle={tw`text-white`}
                returnKeyType="next"
                // onChangeText={(email) => setEmail(email)}
                // value={email}
              />

            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default UpdateProfile;
