import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Theme } from '../../types';
import theme from '../config/colors';
import themeContext from '../config/themeContext';
import ActiveNow from './ActiveNow';
import Completed from './Completed';
import { useContext } from 'react';
import tw from 'twrnc';
import { Text } from 'react-native';
import Cancelled from './Cancelled';

const Tab = createMaterialTopTabNavigator();

function TopTabs() {

    const theme: Theme = useContext(themeContext);

    const options = {
        tabBarStyle: { backgroundColor: theme.base },
        tabBarIndicatorStyle: tw`bg-[${theme.yellow}]`,
    }

    return (
        <Tab.Navigator screenOptions={options}>
            <Tab.Screen options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={[{ color: focused ? theme.yellow : theme.fade_text }, tw`font-bold text-[1rem]`]}>Active Now</Text>
                )
            }} name="ActiveNow" component={ActiveNow} />
            <Tab.Screen
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={[{ color: focused ? theme.yellow : theme.fade_text }, tw`font-bold text-[1rem]`]}>Completed</Text>
                    )
                }}
                name="Completed" component={Completed} />

            <Tab.Screen
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={[{ color: focused ? theme.yellow : theme.fade_text }, tw`font-bold text-[1rem]`]}>Cancelled</Text>
                    )
                }}
                name="Cancelled" component={Cancelled} />
        </Tab.Navigator>
    );
}

export default TopTabs;