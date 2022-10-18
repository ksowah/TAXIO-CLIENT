import { useContext } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc'
import { Theme } from '../../types';
import themeContext from '../config/themeContext';
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";


interface Props{
    from: string;
    destination: string;
    from_description: string;
    destination_description: string;
}

const MarkerTarget = ({from, destination, from_description, destination_description}: Props) => {

    const theme: Theme = useContext(themeContext);

    return (
            <View
                style={tw`py-6 flex-row border-b mb-4 border-[${theme.border}]`}
            >
                <View style={tw`h-[8rem] justify-evenly items-center`}>
                    <View
                        style={tw`bg-[${theme.fade_yellow}] h-12 w-12 rounded-full items-center justify-center`}
                    >
                        <View
                            style={tw`bg-[${theme.yellow}] h-8 w-8 rounded-full items-center justify-center`}
                        >
                            <Foundation name="target-two" size={20} color="#35353f" />
                        </View>
                    </View>

                    <Ionicons
                        name="ellipsis-vertical"
                        size={26}
                        color="#9e9e9e"
                    />

                    <View
                        style={tw`bg-[${theme.fade_yellow}] h-12 w-12 rounded-full items-center justify-center`}
                    >
                        <View
                            style={tw`bg-[${theme.yellow}] h-8 w-8 rounded-full items-center justify-center`}
                        >
                            <FontAwesome5
                                name="map-marker-alt"
                                size={20}
                                color="#35353f"
                            />
                        </View>
                    </View>
                </View>

                <View style={tw`relative flex-1 pl-2`}>
                    <View style={tw`flex-1 mb-4 flex-row items-center `}>
                        {/* --------// */}
                        <View style={tw`flex-1`}>
                            <Text
                                style={tw`text-[${theme.text}] text-[1.3rem] font-bold`}
                            >
                                {from}
                            </Text>
                            <Text style={tw`text-[${theme.fade_text}] text-[.9rem]`}>
                                {from_description}
                            </Text>
                        </View>
                    </View>

                    <View style={tw`flex-1 flex-row items-center`}>
                        {/* --------// */}
                        <View style={tw`flex-1`}>
                            <Text
                                style={tw`text-[${theme.text}] text-[1.3rem] font-bold`}
                            >
                                {destination}
                            </Text>
                            <Text style={tw`text-[${theme.fade_text}] text-[.9rem]`}>
                                {destination_description}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
    );
}


export default MarkerTarget;