import { useContext } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import tw from 'twrnc'
import ChatTopTabs from '../../components/chatInbox';
import themeContext from '../../components/config/themeContext';
import TabsHeader from '../../components/TabsHeader';
import { Theme } from '../../types';

const Inbox = () => {

  const theme: Theme = useContext(themeContext)

  return (
    <SafeAreaView style={tw`flex-1 bg-[${theme.base}]`}>
      <TabsHeader title='Inbox' />
      <ChatTopTabs />
    </SafeAreaView>
  );
}


export default Inbox;