import { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc'
import { Driver, Theme } from '../../types';
import { getRandomChat } from '../bookings/fakeChatDetails';
import { driverDetails, getRandomDriver } from '../bookings/fakeDriverDetails';
import themeContext from '../config/themeContext';
import ChatItem from './ChatItem';

const Calls = () => {

    const theme: Theme = useContext(themeContext);

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={tw`flex-1 bg-[${theme.base}]`}>
        {
            driverDetails.map((chat: Driver, idx: any) => (
                <ChatItem chat={getRandomChat()} />
            ))
        }
    </ScrollView>
  );
}


export default Calls;