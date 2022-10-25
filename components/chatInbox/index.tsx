import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Theme } from '../../types';
import themeContext from '../config/themeContext';
import { useContext } from 'react';
import tw from 'twrnc';
import { Text } from 'react-native';
import Chats from './Chats';
import Calls from './Calls';

const Tab = createMaterialTopTabNavigator();

function ChatTopTabs() {

    const theme: Theme = useContext(themeContext);

    const options = {
        tabBarStyle: { backgroundColor: theme.base, },
        tabBarIndicatorStyle: tw`bg-[${theme.yellow}]`,
    }

    return (
        <Tab.Navigator screenOptions={options}>
            <Tab.Screen options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={[{ color: focused ? theme.yellow : theme.fade_text }, tw`font-bold text-[1rem]`]}>Chats</Text>
                )
            }} name="Chats" component={Chats} />
            <Tab.Screen
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={[{ color: focused ? theme.yellow : theme.fade_text }, tw`font-bold text-[1rem]`]}>Calls</Text>
                    )
                }}
                name="Calls" component={Calls} />
        </Tab.Navigator>
    );
}

export default ChatTopTabs;