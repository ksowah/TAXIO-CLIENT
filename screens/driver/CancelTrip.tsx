import { CheckBox } from "@rneui/themed";
import { useContext, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import tw from "twrnc";
import BackHeader from "../../components/BackHeader";
import themeContext from "../../components/config/themeContext";
import { Theme } from "../../types";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Input } from "@rneui/base";
import Button from "../../components/Button";
import ModalPoup from "../../components/ModalPopup";
import { useRecoilState } from "recoil";
import { destinationAtom, destinationSelected, originAtom } from "../../components/atoms/tripAtom";

const CancelTrip = ({ navigation }: any) => {
  const theme: Theme = useContext(themeContext);

  const [showModal, setShowModal] = useState(false)

  const [isDestinationSelected, setIsDestinationSelected] =
    useRecoilState<any>(destinationSelected);

  const [origin, setOrigin] = useRecoilState<any>(originAtom);
  const [destination, setDestination] = useRecoilState<any>(destinationAtom);

  return (
    <SafeAreaView style={tw`flex-1 bg-[${theme.base}]`}>
      <BackHeader title="Cancel Taxi" navigation={navigation} />

      <ModalPoup
            onPress={() => {
              setShowModal(false)
              setIsDestinationSelected(false)
              setOrigin(null)
              setDestination(null)
              navigation.replace("BaseHome")
            }}
            setShowModal={setShowModal}
            showModal={showModal}
            image={require("../../assets/cancel-trip.png")}
            title={"We're so sad about your cancellation"}
            subTitle={"We will continue to improve our service & satisfy you on the next trip"}
            padding={`py-6`}
            title_color={`text-[${theme.yellow}]`}
          />

      <Text style={tw`text-[${theme.text}] ml-4 mb-6`}>
        Please select the reason for cancellation
      </Text>

      <View>
        <View style={tw`flex-row items-center mb-4 px-2`}>
          <CheckBox
            checked={true}
            checkedIcon={
              <FontAwesome name="check-square" size={24} color={theme.yellow} />
            }
            uncheckedIcon={
              <Feather name="square" size={24} color={theme.yellow} />
            }
            // onPress={onPress}
            containerStyle={tw`p-0 bg-[${theme.base}]`}
          />
          <Text style={tw`text-[${theme.text}] font-bold text-[.9rem]`}>
            {" "}
            Waiting for long time{" "}
          </Text>
        </View>

        <View style={tw`flex-row items-center mb-4 px-2`}>
          <CheckBox
            checked={true}
            checkedIcon={
              <FontAwesome name="check-square" size={24} color={theme.yellow} />
            }
            uncheckedIcon={
              <Feather name="square" size={24} color={theme.yellow} />
            }
            // onPress={onPress}
            containerStyle={tw`p-0 bg-[${theme.base}]`}
          />
          <Text style={tw`text-[${theme.text}] font-bold text-[.9rem]`}>
            {" "}
            Unable to contact driver{" "}
          </Text>
        </View>

        <View style={tw`flex-row items-center mb-4 px-2`}>
          <CheckBox
            checked={true}
            checkedIcon={
              <FontAwesome name="check-square" size={24} color={theme.yellow} />
            }
            uncheckedIcon={
              <Feather name="square" size={24} color={theme.yellow} />
            }
            // onPress={onPress}
            containerStyle={tw`p-0 bg-[${theme.base}]`}
          />
          <Text style={tw`text-[${theme.text}] font-bold text-[.9rem]`}>
            Driver denied to go to destination{" "}
          </Text>
        </View>

        <View style={tw`flex-row items-center mb-4 px-2`}>
          <CheckBox
            checked={true}
            checkedIcon={
              <FontAwesome name="check-square" size={24} color={theme.yellow} />
            }
            uncheckedIcon={
              <Feather name="square" size={24} color={theme.yellow} />
            }
            // onPress={onPress}
            containerStyle={tw`p-0 bg-[${theme.base}]`}
          />
          <Text style={tw`text-[${theme.text}] font-bold text-[.9rem]`}>
            {" "}
            Driver denied to come to pickup{" "}
          </Text>
        </View>

        <View style={tw`flex-row items-center mb-4 px-2`}>
          <CheckBox
            checked={true}
            checkedIcon={
              <FontAwesome name="check-square" size={24} color={theme.yellow} />
            }
            uncheckedIcon={
              <Feather name="square" size={24} color={theme.yellow} />
            }
            // onPress={onPress}
            containerStyle={tw`p-0 bg-[${theme.base}]`}
          />
          <Text style={tw`text-[${theme.text}] font-bold text-[.9rem]`}>
            {" "}
            Wrong address shown{" "}
          </Text>
        </View>

        <View style={tw`flex-row items-center mb-4 px-2`}>
          <CheckBox
            checked={true}
            checkedIcon={
              <FontAwesome name="check-square" size={24} color={theme.yellow} />
            }
            uncheckedIcon={
              <Feather name="square" size={24} color={theme.yellow} />
            }
            // onPress={onPress}
            containerStyle={tw`p-0 bg-[${theme.base}]`}
          />
          <Text style={tw`text-[${theme.text}] font-bold text-[.9rem]`}>
            The price is not reasonable{" "}
          </Text>
        </View>

        <View style={tw`px-4 mt-4`}>
          <Text style={tw`text-[${theme.text}] font-bold text-[1rem] mb-4`}>
            Other
          </Text>
          <Input
            containerStyle={tw`w-full p-0`}
            inputContainerStyle={tw`border-b-0 bg-[${theme.input_base}] h-13 rounded-2xl px-2 text-center`}
            placeholder={"Other Reason"}
            placeholderTextColor={"#797a7c"}
            autoCapitalize="none"
            inputStyle={tw`text-white`}
            autoCorrect={false}
            returnKeyType="next"
          />
        </View>
      </View>
      <View
        style={tw` h-[8rem] w-full border-t bg-[${theme.base}] border-[${theme.border}] absolute bottom-0 items-center justify-center`}
      >
        <Button title="Submit" onPress={() => setShowModal(true)}/>
      </View>
    </SafeAreaView>
  );
};

export default CancelTrip;
