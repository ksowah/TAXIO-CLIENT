import { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc'
import { Chat, Driver, Theme } from '../../types';
import { chatDetails } from '../bookings/fakeChatDetails';
import { driverDetails } from '../bookings/fakeDriverDetails';
import themeContext from '../config/themeContext';
import ChatItem from './ChatItem';

const Chats = ({navigation}: any) => {

    const theme: Theme = useContext(themeContext);

    const openChats = (name: string) => {
        navigation.navigate('ChatScreen', {name: name})
    }

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={tw`flex-1 bg-[${theme.base}]`}>
        {
            chatDetails.map((chat: Chat, idx: any) => (
                <ChatItem chats={true} onPress={() => openChats(chat.name)} chat={chat} />
            ))
        }
    </ScrollView>
  );
}


export default Chats;