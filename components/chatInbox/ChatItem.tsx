import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import { Bookings, Driver, Theme } from '../../types';
import themeContext from '../config/themeContext';
import { useContext, useState } from 'react';
import { Avatar } from '@rneui/base';
import { AntDesign } from '@expo/vector-icons';

const ChatItem = ({driver, onPress} : {driver: Driver, onPress?: () => void}) => {

    const theme: Theme = useContext(themeContext);

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.6} style={tw`p-4 flex-row items-center justify-between`}>
            <View style={tw`flex-row items-center`}>
                <Avatar
                    rounded
                    size={60}
                    source={driver.image}
                />

                <View>
                    <Text style={tw`text-[${theme.text}] font-bold text-[1.2rem] ml-4`}>{driver.name}</Text>
                    <Text style={tw`text-[${theme.fade_text}] text-[.8rem] ml-4 mt-2`}>Incoming | Dec 19, 2024</Text>
                </View>
            </View>

            <View style={tw`items-end`}>
                <AntDesign name="phone" size={24} color={theme.yellow} />
            </View>
        </TouchableOpacity>
    );
}


export default ChatItem;