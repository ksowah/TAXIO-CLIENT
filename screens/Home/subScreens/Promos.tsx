import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import tw from "twrnc";
import themeContext from "../../../components/config/themeContext";
import { Theme } from "../../../types";
import { useContext, useState } from "react";
import BackHeader from "../../../components/BackHeader";
import Button from "../../../components/Button";
import { CheckBox } from "@rneui/themed";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { promoData } from "../../../utils/promoData";


const Promos = ({ navigation }: any) => {
  const theme: Theme = useContext(themeContext);

  interface Props {
    checked: boolean;
    onPress: () => void;
    title: string;
    subtitle: string;
    image: any;
  }

  const [checked1, setChecked1] = useState(true)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)
  const [checked5, setChecked5] = useState(false)


  const promo1 = () => {
    setChecked1(true)
    setChecked2(false)
    setChecked3(false)
    setChecked4(false)
    setChecked5(false)
  }
  const promo2 = () => {
    setChecked1(false)
    setChecked2(true)
    setChecked3(false)
    setChecked4(false)
    setChecked5(false)
  }

  const promo3 = () => {
    setChecked1(false)
    setChecked2(false)
    setChecked3(true)
    setChecked4(false)
    setChecked5(false)
  }

  const promo4 = () => {
    setChecked1(false)
    setChecked2(false)
    setChecked3(false)
    setChecked4(true)
    setChecked5(false)
  }

  const promo5 = () => {
    setChecked1(false)
    setChecked2(false)
    setChecked3(false)
    setChecked4(false)
    setChecked5(true)
  }

  const promoSelected = () => {
    if(checked1){
        navigation.navigate("SelectRide", {promo: promoData[0]})
        return
    }
    if(checked2){
        navigation.navigate("SelectRide", {promo: promoData[1]})
        return
    }
    if(checked3){
        navigation.navigate("SelectRide", {promo: promoData[2]})
        return
    }
    if(checked4){
        navigation.navigate("SelectRide", {promo: promoData[3]})
        return
    }
    if(checked5){
        navigation.navigate("SelectRide", {promo: promoData[4]})
        return
    }

    navigation.navigate("SelectRide")

  }


  const PromoCard = ({ checked, onPress, title, subtitle, image }: Props) => {
    return (
      <View
        style={tw`w-full flex-row h-[6rem] bg-[${theme.input_base}] rounded-xl items-center mb-2`}
      >
        <View style={tw`h-full w-[6rem] items-center justify-center`}>
          <Image source={image} />
        </View>

        <View style={tw`flex-1 ml-2 justify-center`}>
          <Text style={tw`mb-2 text-[${theme.text}] font-bold text-[1rem]`}>
            {title}
          </Text>
          <Text style={tw`mb-2 text-[${theme.fade_text}] text-[0.9rem]`}>
            {subtitle}
          </Text>
        </View>

        <CheckBox
          checked={checked}
          checkedIcon={
            <FontAwesome5 name="dot-circle" size={26} color="#febb1b" />
          }
          uncheckedIcon={<Entypo name="circle" size={26} color="#febb1b" />}
          onPress={onPress}
          containerStyle={tw`p-0 mr-3 bg-[${theme.input_base}]`}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[${theme.base}]`}>
      <BackHeader title="Add Promo" navigation={navigation} />

      <ScrollView style={tw`px-4 mt-4`}>
        <PromoCard 
            checked={checked1}
            onPress={promo1}
            title={promoData[0].title}
            subtitle={promoData[0].subtitle}
            image={promoData[0].image}
        />
        <PromoCard
            checked={checked2}
            onPress={promo2}
            title={promoData[1].title}
            subtitle={promoData[1].subtitle}
            image={promoData[1].image}
        />
        <PromoCard
            checked={checked3}
            onPress={promo3}
            title={promoData[2].title}
            subtitle={promoData[2].subtitle}
            image={promoData[2].image}
        />
        <PromoCard
            checked={checked4}
            onPress={promo4}
            title={promoData[3].title}
            subtitle={promoData[3].subtitle}
            image={promoData[3].image}
        />

        <PromoCard  
            checked={checked5}
            onPress={promo5}
            title={promoData[4].title}
            subtitle={promoData[4].subtitle}
            image={promoData[4].image}
        />
      </ScrollView>

      <View
        style={tw` h-[8rem] w-full border-t bg-[${theme.base}] border-[${theme.border}] absolute bottom-0 items-center justify-center`}
      >
        <Button title="Apply Promo" onPress={promoSelected} />
      </View>
    </SafeAreaView>
  );
};

export default Promos;
