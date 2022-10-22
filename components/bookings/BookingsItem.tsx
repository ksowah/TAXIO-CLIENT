import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import { Bookings, Driver, Theme } from '../../types';
import themeContext from '../config/themeContext';
import { useContext, useState } from 'react';
import { Avatar } from '@rneui/base';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import MarkerTarget from '../bottomSheetUtils/MarkerTarget';


interface Props {
    item: Bookings
    driver: Driver
}

const BookingsItem = ({item, driver}: Props) => {

    const theme: Theme = useContext(themeContext);

    const [drop, setDrop] = useState(false)

    const date = new Date(item?.date).toLocaleString('en-US', { month: 'short', 
  day: 'numeric', 
  year: 'numeric', 
  hour: 'numeric', 
  minute: 'numeric',
  hour12: true }).replace("at", "|")

  console.log(item);  

    return (
        <View style={tw`flex w-full p-4 px-4 bg-[${theme.base_light_shade}] rounded-[2rem] mb-3`}>
            <View style={tw`border-b border-[${theme.border}] pb-4 flex-row items-center justify-between`}>
                <View style={tw`flex-row items-center`}>
                    <Avatar
                        rounded
                        size={60}
                        source={driver.image}
                    />

                    <View>
                        <Text style={tw`text-[${theme.text}] font-bold text-[1.2rem] ml-4`}>{driver.name}</Text>
                        <Text style={tw`text-[${theme.fade_text}] text-[.9rem] ml-4 mt-2`}>{driver.car}</Text>
                    </View>
                </View>

                <View style={tw`items-end`}>
                    <View style={tw`${item.cancelled ? "bg-[#f75555]" : "bg-[#4aaf57]"} items-center justify-center w-[4rem] h-[1.4rem] mb-2 rounded-[6px]`}>
                        <Text style={tw`text-white font-bold text-[.6rem]`}>{item.cancelled ? "Cancelled" : "Completed"}</Text>
                    </View>
                    <Text style={tw`font-bold text-[${theme.text}] text-[.7rem]`}>{driver.plate}</Text>
                </View>
            </View>

            <View>
                {drop ? (
                    <View>
                        <View style={tw`flex-row items-center justify-between w-full mt-4`}>

                            <View style={tw`flex-row items-center `}>
                                <MaterialCommunityIcons name="map-marker-outline" size={24} color={theme.fade_text} />
                                <Text style={tw`text-[${theme.text}] font-bold`}>
                                    {item.distance}
                                </Text>
                            </View>

                            <View style={tw`flex-row items-center`}>
                                <AntDesign name="clockcircleo" size={24} color={theme.fade_text} />
                                <Text style={tw`text-[${theme.text}] font-bold ml-2`}>
                                    {item.time}
                                </Text>
                            </View>

                            <View style={tw`flex-row items-center`}>
                                <MaterialCommunityIcons name="wallet-outline" size={24} color={theme.fade_text} />
                                <Text style={tw`text-[${theme.text}] font-bold ml-2`}>
                                    {item.price}
                                </Text>
                            </View>
                        </View>

                        <View style={tw`flex-row items-center justify-between py-4 border-b border-[${theme.border}]`}>
                            <Text style={tw`text-[${theme.fade_text}]`}>Date & Time</Text>
                            <Text style={tw`text-[${theme.text}]`}>{date}</Text> 
                        </View>

                        <View>
                            <MarkerTarget
                                destination='Destination'
                                destination_description={item.destination}
                                from='From'
                                from_description={item.origin}
                            />
                        </View>

                        <TouchableOpacity onPress={() => setDrop(false)} activeOpacity={.5} style={tw`h-[2rem] items-center justify-center`}>
                            <Entypo name="chevron-small-up" size={28} color={theme.fade_text} />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity onPress={() => setDrop(true)} activeOpacity={.5} style={tw`h-[2.5rem] items-center justify-center`}>
                        <Entypo name="chevron-small-down" size={28} color={theme.fade_text} />
                    </TouchableOpacity>
                )}
            </View>

        </View>
    );
}


export default BookingsItem;