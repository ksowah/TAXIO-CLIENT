import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
} from "react-native";
import tw from "twrnc";
import Button from "../../components/Button";
import { Logout } from "../../components/helpers/logout";

const UpdateProfile = ({navigation}: any) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={tw`flex-1 w-full`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={tw`flex-1 bg-[#181A20]`}>
          <Button title="Logout" onPress={() => Logout(navigation)}/>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default UpdateProfile;
