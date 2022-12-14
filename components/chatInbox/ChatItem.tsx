import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import { Chat, Driver, Theme } from '../../types';
import themeContext from '../config/themeContext';
import { useContext } from 'react';
import { Avatar } from '@rneui/base';
import { AntDesign } from '@expo/vector-icons';

interface Props {
    chat: Chat;
    chats?: boolean;
    onPress?: () => void;
    newChat?: boolean;
    message?: string;
    count?: string;
}

const ChatItem = ({ chat, onPress, chats, newChat, message, count }: Props) => {

    const theme: Theme = useContext(themeContext);

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.6} style={tw`p-4 flex-row items-center justify-between`}>
            <View style={tw`flex-row items-center`}>
                <Avatar
                    rounded
                    size={60}
                    source={chat.image}
                />

                <View>
                    <Text style={tw`text-[${theme.text}] font-bold text-[1.2rem] ml-4`}>{chat.name}</Text>
                    <Text style={tw`text-[${theme.fade_text}] text-[.8rem] ml-4 mt-2`}>{message}</Text>
                </View>
            </View>

            <View style={tw`items-end`}>
                {
                    chats ?
                        <View style={tw`items-end`}>
                            {
                                newChat &&
                                <View style={tw`h-[1.4rem] w-[1.4rem] bg-[${theme.yellow}] rounded-full items-center justify-center text-gray`}>
                                    <Text>{count}</Text>
                                </View>
                            }
                            <Text style={tw`text-[${theme.fade_text}] text-[.8rem] mt-2`}>12:00 PM</Text>
                        </View>
                        :
                        <AntDesign name="phone" size={24} color={theme.yellow} />
                }
            </View>
        </TouchableOpacity>
    );
}


export default ChatItem;