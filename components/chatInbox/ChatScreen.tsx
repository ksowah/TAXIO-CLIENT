import { useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import tw from 'twrnc'
import { Theme } from '../../types';
import BackHeader from '../BackHeader';
import themeContext from '../config/themeContext';

const ChatScreen = ({route}: any) => {

    const theme: Theme = useContext(themeContext)

    const { name } = route.params;

  return (
    <SafeAreaView style={tw`flex-1 bg-[${theme.base}]`}>
        <BackHeader icons title={name}/>

        <ScrollView style={tw``}>
            <View style={tw`px-1 bg-[${theme.input_base}] w-[3rem] p-1 rounded-3xl self-center`}>
                <Text style={tw`text-[${theme.fade_text}] text-center text-xs`}>Today</Text>
            </View>
            
        </ScrollView>

    </SafeAreaView>
  );
}


export default ChatScreen;