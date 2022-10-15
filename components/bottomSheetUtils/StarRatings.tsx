import { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import { Theme } from '../../types';
import themeContext from '../config/themeContext';
import { AntDesign } from '@expo/vector-icons';

const StarRatings = () => {

    const theme: Theme = useContext(themeContext)

    const [star1, setStar1] = useState(false)
    const [star2, setStar2] = useState(false)
    const [star3, setStar3] = useState(false)
    const [star4, setStar4] = useState(false)
    const [star5, setStar5] = useState(false)

    const Star = ({checked, onPress}: {checked: boolean, onPress: () => void}) => {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={.5} style={tw`mr-4`}>
                {checked ? (
                    <AntDesign name="star" size={27} color={theme.yellow} />
                ) : (
                    <AntDesign name="staro" size={27} color={theme.yellow} />
                )}
            </TouchableOpacity>
        )
    }

    const oneStar = () => {
        setStar1(true)
        setStar2(false)
        setStar3(false)
        setStar4(false)
        setStar5(false)
    }

    const twoStars = () => {
        setStar1(true)
        setStar2(true)
        setStar3(false)
        setStar4(false)
        setStar5(false)
    }

    const threeStars = () => {
        setStar1(true)
        setStar2(true)
        setStar3(true)
        setStar4(false)
        setStar5(false)
    }

    const fourStars = () => {
        setStar1(true)
        setStar2(true)
        setStar3(true)
        setStar4(true)
        setStar5(false)
    }

    const fiveStars = () => {
        setStar1(true)
        setStar2(true)
        setStar3(true)
        setStar4(true)
        setStar5(true)
    }

  return (
    <View style={tw`w-full border-b border-[${theme.border}] items-center justify-center py-4`}>
      <Text style={tw`text-[${theme.text}] font-bold text-xl`}>How is your Driver?</Text>
      <Text style={tw`text-[${theme.fade_text}] text-[0.9rem]`}>Please rate your driver...</Text>

      <View style={tw`flex-row items-center mt-6 mb-2`}>
        <Star checked={star1} onPress={oneStar} />
        <Star checked={star2} onPress={twoStars} />
        <Star checked={star3} onPress={threeStars} />
        <Star checked={star4} onPress={fourStars} />
        <Star checked={star5} onPress={fiveStars} />
      </View>
    </View>
  );
}


export default StarRatings;