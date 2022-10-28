import { useContext } from 'react';
import { ScrollView } from 'react-native';
import tw from 'twrnc'
import { Chat, Theme } from '../../types';
import { chatDetails, getRandomChat } from '../bookings/fakeChatDetails';
import themeContext from '../config/themeContext';
import ChatItem from './ChatItem';

const Calls = () => {

    const theme: Theme = useContext(themeContext);

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={tw`flex-1 bg-[${theme.base}]`}>
        {
            chatDetails.map((chat: Chat, idx: any) => (
                <ChatItem key={idx} chat={getRandomChat()} />
            ))
        }
    </ScrollView>
  );
}


export default Calls;