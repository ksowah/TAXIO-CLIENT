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
import { useState, useContext } from "react";
import PhonePicker from "../../components/PhonePicker";
import DropDown from "../../components/DropDown";
import { useMutation } from "@apollo/client";
import { UPDATE_PROFILE } from "../../mutations/updateProfileMutation";
import ModalPoup from "../../components/ModalPopup";
import themeContext from "../../components/config/themeContext";
import { Theme } from "../../types";

const UpdateProfile = ({ navigation }: any) => {
  const [date, setDate] = useState<Date>(new Date());
  const [mode, setMode] = useState<any>('date');
  const [dateValue, setDateValue] = useState('');
  const [show, setShow] = useState(false);
  const [isClicked, setIsClicked] = useState<any>(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [genderValue, setGenderValue] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false)


  const theme: Theme = useContext(themeContext)

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = (tempDate.getMonth() + 1) + "/" + tempDate.getDate() + "/" + tempDate.getFullYear();
    setDateValue(fDate);
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
      <View style={tw`w-full h-13 px-2 my-6`}>
        <View style={tw`w-full flex-row h-full bg-[${theme.input_base}] rounded-2xl items-center`}>
          <View style={tw`flex-1 h-full items-start justify-center px-2`}>
            <Text style={tw`text-center text-[#797a7c] text-[1.1rem] ${isClicked && `text-[${theme.text}]`}`}>{isClicked ? dateValue : "Date of Birth"}</Text>
          </View>

          <TouchableOpacity onPress={showDatepicker} activeOpacity={.8} style={tw`h-full flex-row w-[3.5rem] items-center justify-end pr-3`}>
              <FontAwesome name="calendar" size={24} color="#636568" />
          </TouchableOpacity>
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
      </View>
    );
  };

  const [profile, { loading }] = useMutation(UPDATE_PROFILE, {
    variables: { data: {firstName, lastName, phoneNumber, dateOfBirth: dateValue, gender: genderValue} },
  });

  const handleUpdateProfile = async () => {
    if(firstName !== "" && lastName !== "" && phoneNumber !== "" && genderValue){
      await profile().then((res) =>{
        setShowModal(true)
      }).catch((err) => {
        console.log(err)
        alert(err.message)
      })
    }else{
      alert("Please fill all fields")
      return
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={tw`flex-1 w-full`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={tw`flex-1 bg-[${theme.base}]`}>
          <BackHeader title="Fill your profile" navigation={navigation}/>

          <ModalPoup
            onPress={() => {
              setShowModal(false)
              navigation.replace("BaseHome");
            }}
            setShowModal={setShowModal}
            showModal={showModal}
            image={theme.mode ? require("../../assets/profile.png") : require("../../assets/lightTheme/light-modal.png")}
            title={"Congratulations!"}
            subTitle={"Your profile has been updated successfully!"}
          />

          <View style={tw`w-full flex-1 pb-8 items-center justify-between`}>
            <View style={tw`relative w-[10rem] mb-4 `}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={tw`absolute z-50 bg-[#FEBB1B] p-2 rounded-lg bottom-0 right-6`}
              >
                <FontAwesome name="pencil" size={24} color={theme.base} />
              </TouchableOpacity>
              <Avatar
                rounded
                size={130}
                source={theme.mode ? require("../../assets/profile-avatar.png") : require("../../assets/lightTheme/light-profile-avatar.png")}
                containerStyle={tw`bg-[#464648]`}
              />
            </View>
            <View style={tw`w-full px-1 pb-7`}>
              <Input
                containerStyle={tw`w-full`}
                inputContainerStyle={tw`border-b-0 bg-[${theme.input_base}] h-13 rounded-2xl px-2 text-center`}
                placeholder={"First Name"}
                autoComplete="off"
                placeholderTextColor={"#797a7c"}
                keyboardType="default"
                textContentType="name"
                inputStyle={tw`text-[${theme.text}]`}
                returnKeyType="next"
                onChangeText={(fName) => setFirstName(fName)}
                value={firstName}
              />

              <Input
                containerStyle={tw`w-full`}
                inputContainerStyle={tw`border-b-0 bg-[${theme.input_base}] h-13 rounded-2xl px-2 text-center`}
                placeholder={"Last Name"}
                placeholderTextColor={"#797a7c"}
                keyboardType="default"
                textContentType="name"
                autoComplete="off"
                inputStyle={tw`text-[${theme.text}]`}
                returnKeyType="next"
                onChangeText={(lName) => setLastName(lName)}
                value={lastName}
              />

              <PhonePicker setPhoneNumber={setPhoneNumber}/>

              <DatePicker />

              <DropDown setGenderValue={setGenderValue} genderValue={genderValue} />

            </View>

            <Button onPress={handleUpdateProfile} loading={loading} title="Continue"/>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default UpdateProfile;
