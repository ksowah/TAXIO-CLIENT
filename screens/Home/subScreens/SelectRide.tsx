import { useContext, useState, useEffect } from "react";
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import tw from "twrnc";
import BackHeader from "../../../components/BackHeader";
import themeContext from "../../../components/config/themeContext";
import { Theme } from "../../../types";
import { FontAwesome5 } from "@expo/vector-icons";
import { CheckBox } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Input } from "@rneui/base";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Button from "../../../components/Button";
import { useRecoilValue } from "recoil";
import { travelTimeInfo } from "../../../components/atoms/tripAtom";


const SelectRide = ({route, navigation}: any) => {
  const theme: Theme = useContext(themeContext);

  const [bike, setBike] = useState(false);
  const [standard, setStandard] = useState(true);
  const [premium, setPremium] = useState(false);

  interface Props {
    checked: boolean;
    onPress: () => void;
    Icon: any;
    rideType: string;
    price: string;
  }

  const RideCard = ({ checked, onPress, Icon, rideType, price }: Props) => {
    return (
      <View
        style={tw`mb-4 bg-[${theme.input_base}] rounded-2xl w-full h-[5rem] pl-4 pr-1 items-center flex-row justify-between`}
      >
        <View style={tw`flex-row items-center`}>
          <View
            style={tw`mr-4 h-12 w-12 rounded-full bg-[${theme.yellow}] items-center justify-center`}
          >
            {Icon}
          </View>

          <View style={tw`h-full`}>
            <Text style={tw`text-[${theme.text}] font-bold text-[1.2rem] mb-1`}>
              {rideType}
            </Text>
            <Text style={tw`text-[${theme.fade_text}] text-[.9rem]`}>
              7 nearbies
            </Text>
          </View>
        </View>

        <View style={tw`flex-row items-center`}>
          <Text onPress={onPress} style={tw`text-[${theme.text}] font-bold text-[1rem]`}>
            {price}
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

  const bikeCheck = () => {
    setBike(true);
    setPremium(false);
    setStandard(false);
  };

  const standardCheck = () => {
    setBike(false);
    setPremium(false);
    setStandard(true);
  };
  const premiumCheck = () => {
    setBike(false);
    setPremium(true);
    setStandard(false);
  };

  const clearParams = () => {
    navigation.setParams({
      promo: undefined,
    });
  }

  console.log(route.params);
  

  const travelInfo: any = useRecoilValue(travelTimeInfo);

  const travelTime = travelInfo?.duration?.text
  const travelDistance = travelInfo?.distance?.text

  const SURGE_CHARGE_RATE = 1.5;

  const getMultiplier = () => {
    if(bike){
        return 1
     }
     if(standard){
        return 1.2
     }
     if(premium){
        return 1.75
     }

     return 1
}  
  
  let multiplier= getMultiplier()
  

  let priceOfSelectedRide = new Intl.NumberFormat('en-gb', { style: 'currency', currency: 'GBP' }).format((
    travelInfo?.duration?.value * SURGE_CHARGE_RATE * multiplier) / 100
    );

  let bikePrice = new Intl.NumberFormat('en-gb', { style: 'currency', currency: 'GBP' }).format((
    travelInfo?.duration?.value * SURGE_CHARGE_RATE * 1) / 100
    );

  let standardPrice = new Intl.NumberFormat('en-gb', { style: 'currency', currency: 'GBP' }).format((
    travelInfo?.duration?.value * SURGE_CHARGE_RATE * 1.2) / 100
    );

  let premiumPrice = new Intl.NumberFormat('en-gb', { style: 'currency', currency: 'GBP' }).format((
    travelInfo?.duration?.value * SURGE_CHARGE_RATE * 1.75) / 100
    );


    const proceedToPayment = () => {
      navigation.navigate("Payment", {
        price: priceOfSelectedRide,
      });
    }


  return (
    <KeyboardAvoidingView behavior="padding" style={tw`flex-1`}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <SafeAreaView style={tw`flex-1 bg-[${theme.base}]`}>
      <BackHeader title="Select Car" navigation={navigation}/>

      <View>
        <Text style={tw`text-center text-[${theme.text}]`}>
          Select the vehicle category you want to ride
        </Text>
      </View>

      <View style={tw`w-full px-4  my-4 bg-[${theme.base}] border-b border-[${theme.border}]`}>
        <RideCard
          rideType="Bike"
          checked={bike}
          onPress={bikeCheck}
          Icon={<FontAwesome5 name="motorcycle" size={22} color="#35383f" />}
          price={bikePrice}
        />
        <RideCard
          rideType="Standard"
          checked={standard}
          onPress={standardCheck}
          Icon={<FontAwesome5 name="taxi" size={22} color="#35383f" />}
            price={standardPrice}
        />
        <RideCard
          rideType="Premium"
          checked={premium}
          onPress={premiumCheck}
          Icon={<Fontisto name="taxi" size={22} color="#35383f" />}
            price={premiumPrice}
        />
      </View>

      <View style={tw`w-full px-6 mb-4 border-b border-[${theme.border}]`}>
        <Text style={tw`font-bold text-[${theme.text}] text-[1rem]`}>
          Promo Code
        </Text>

        <View style={tw`flex-row mt-6 items-center justify-center`}>

          {!route.params?.promo ? (
            <Input
              placeholder="Enter Promo Code"
              placeholderTextColor={"#797a7c"}
              containerStyle={tw`flex-1 m-0 p-0`}
              inputContainerStyle={tw`bg-[${theme.input_base}] border-b-0 h-13 rounded-2xl px-2 text-center`}
              inputStyle={tw`text-[${theme.text}]`}
              autoCapitalize="none"
              keyboardType="default"
              autoCorrect={false}
              returnKeyType="next"
            />
          ) : (
            <View style={tw`h-11 w-[13rem] mb-6 flex-row items-center rounded-full bg-[${theme.yellow}] items-center justify-center`}>
                <Text style={tw`text-[1.1rem] text-[${theme.base}]`}>
                    {route?.params?.promo.title}
                </Text>

                <TouchableOpacity onPress={clearParams} style={tw`items-center justify-center ml-2 border border-[${theme.border}] h-4 w-4 rounded-sm`}>
                    <FontAwesome5 name="times" size={10} color={theme.base} />
                </TouchableOpacity>
            </View>
          )}


          <TouchableOpacity onPress={() => navigation.navigate("Promos")} activeOpacity={.5} style={tw`h-11 w-11 rounded-full mb-6 ml-2 bg-[${theme.input_base}] items-center justify-center`}>
                <Feather name="plus" size={20} color={theme.text} />
          </TouchableOpacity>
        </View>
      </View>

        <View style={tw`w-full items-center justify-center p-2`}>
            <View style={tw`flex-row items-center mb-6 justify-evenly w-full bg-[${theme.input_base}] rounded-2xl h-[4rem]`}>

                <View style={tw`flex-row items-center `}>
                    <MaterialCommunityIcons name="map-marker-outline" size={24} color={theme.fade_text} />
                    <Text style={tw`text-[${theme.text}] font-bold`}>
                        {travelDistance}
                    </Text>
                </View>

                <View style={tw`flex-row items-center`}>
                    <AntDesign name="clockcircleo" size={24} color={theme.fade_text}  />
                    <Text style={tw`text-[${theme.text}] font-bold ml-2`}>
                        {travelTime}
                    </Text>
                </View>

                <View style={tw`flex-row items-center`}>
                    <MaterialCommunityIcons name="wallet-outline" size={24} color={theme.fade_text} />
                    <Text style={tw`text-[${theme.text}] font-bold ml-2`}>
                        {priceOfSelectedRide}
                    </Text>
                </View>

            </View>
                <Button title="Continue" onPress={proceedToPayment}/>
        </View>

    </SafeAreaView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SelectRide;
