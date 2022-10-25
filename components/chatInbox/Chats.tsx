import { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc'
import { Driver, Theme } from '../../types';
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
            driverDetails.map((driver: Driver, idx: any) => (
                <ChatItem onPress={() => openChats(driver.name)} driver={driver} />
            ))
        }
    </ScrollView>
  );
}


export default Chats;