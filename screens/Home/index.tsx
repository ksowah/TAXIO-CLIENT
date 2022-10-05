import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons';
import Home from './Home';
import Bookings from './Bookings';
import Inbox from './Inbox';
import Wallet from './Wallet';
import Profile from './Profile';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useContext } from "react"
import themeContext from '../../components/config/themeContext';
import { Theme } from '../../types';


const Tabs = ({navigation}: any) => {

    const Tab = createBottomTabNavigator();

    const theme: Theme = useContext(themeContext)

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: tw`bg-[${theme.base}] border-t-0`,
        tabBarActiveTintColor: '#FEBB1B',
      }}
    >
        <Tab.Screen
        children={() => <Home navigation={navigation} />}
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
        <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="newspaper-variant-outline" size={size} color={color} />
          ),
        }}
      />
        <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="message1" size={size} color={color} />
          ),
        }}
      />
        <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet-outline" size={size} color={color} />
          ),
        }}
      />
        <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default Tabs;