import { useContext, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import tw from "twrnc";
import BackHeader from "../../../components/BackHeader";
import themeContext from "../../../components/config/themeContext";
import { Theme } from "../../../types";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckBox } from "@rneui/themed";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../../components/Button";

const Payment = ({route, navigation }: any) => {
  const theme: Theme = useContext(themeContext);

  interface Props {
    checked: boolean;
    onPress: () => void;
    title: string;
    Icon: any;
    price: string;
  }

  const PaymentCard = ({ checked, Icon, onPress, price, title }: Props) => {
    return (
      <View
        style={tw`flex-row justify-between items-center bg-[${theme.input_base}] h-[4.5rem] rounded-xl px-4 py-3 mb-3`}
      >
        <View style={tw`flex-row items-center`}>
          {Icon}
          <Text style={tw`text-[${theme.text}] text-[1rem] ml-2`}>{title}</Text>
        </View>

        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-[${theme.yellow}] font-bold text-[1rem]`}>
            {checked && price}
          </Text>
          <CheckBox
            checked={checked}
            checkedIcon={
              <FontAwesome5 name="dot-circle" size={26} color="#febb1b" />
            }
            uncheckedIcon={<Entypo name="circle" size={26} color="#febb1b" />}
            onPress={onPress}
            containerStyle={tw`p-0 bg-[${theme.input_base}]`}
          />
        </View>
      </View>
    );
  };

  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);

  const { price } = route.params

  const option1 = () => {
    setCheck1(true);
    setCheck2(false);
    setCheck3(false);
    setCheck4(false);
    setCheck5(false);
    setCheck6(false);
  };

  const option2 = () => {
    setCheck1(false);
    setCheck2(true);
    setCheck3(false);
    setCheck4(false);
    setCheck5(false);
    setCheck6(false);
  };
  const option3 = () => {
    setCheck1(false);
    setCheck2(false);
    setCheck3(true);
    setCheck4(false);
    setCheck5(false);
    setCheck6(false);
  };
  const option4 = () => {
    setCheck1(false);
    setCheck2(false);
    setCheck3(false);
    setCheck4(true);
    setCheck5(false);
    setCheck6(false);
  };
  const option5 = () => {
    setCheck1(false);
    setCheck2(false);
    setCheck3(false);
    setCheck4(false);
    setCheck5(true);
    setCheck6(false);
  };

  const option6 = () => {
    setCheck1(false);
    setCheck2(false);
    setCheck3(false);
    setCheck4(false);
    setCheck5(false);
    setCheck6(true);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[${theme.base}]`}>
      <BackHeader title="Payment Method" navigation={navigation} />

      <View style={tw`mb-4`}>
        <Text style={tw`mx-4 text-[${theme.text}]`}>
          Select the payment method you want to use
        </Text>
      </View>

      <ScrollView style={tw`flex-1 p-4 mb-[4rem]`}>
        <PaymentCard
          Icon={
            <MaterialIcons
              name="account-balance-wallet"
              size={30}
              color={theme.yellow}
            />
          }
          title="My Wallet"
          price={price}
          checked={check1}
          onPress={option1}
        />
        <PaymentCard
          Icon={<FontAwesome name="paypal" size={30} color="#009cde" />}
          title="Pay Pal"
          price={price}
          checked={check2}
          onPress={option2}
        />
        <PaymentCard
          Icon={<AntDesign name="google" size={30} color={theme.yellow} />}
          title="Google Pay"
          price={price}
          checked={check3}
          onPress={option3}
        />
        <PaymentCard
          Icon={<AntDesign name="apple1" size={30} color={theme.text} />}
          title="Apple Pay"
          price={price}
          checked={check4}
          onPress={option4}
        />
        <PaymentCard
          Icon={<FontAwesome name="credit-card" size={30} color="#eb001b" />}
          title="••• ••• ••• 46797"
          price={price}
          checked={check5}
          onPress={option5}
        />
        <PaymentCard
          Icon={
            <FontAwesome5
              name="dollar-sign"
              size={24}
              color="black"
              style={tw`bg-[${theme.yellow}] h-[2rem] w-[2rem] text-center pt-1`}
            />
          }
          title="Cash Money" 
          price={price}
          checked={check6}
          onPress={option6}
        />
      </ScrollView>
      <View
        style={tw` h-[8rem] w-full border-t bg-[${theme.base}] border-[${theme.border}] absolute bottom-0 items-center justify-center`}
      >
        <Button title="Continue" onPress={() => navigation.navigate("DriverArrival")}/>
      </View>
    </SafeAreaView>
  );
};

export default Payment;
