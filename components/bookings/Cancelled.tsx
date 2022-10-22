import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { View, ScrollView } from 'react-native';
import tw from 'twrnc'
import { BOOKINGS_QUERY } from '../../queries/bookingsQuery';
import { ME_QUERY } from '../../queries/meQuery';
import { Bookings, Theme } from '../../types';
import themeContext from '../config/themeContext';
import BookingsItem from './BookingsItem';
import { getRandomDriver } from './fakeDriverDetails';

const Cancelled = () => {

    const theme: Theme = useContext(themeContext);

    const { data: session } = useQuery(ME_QUERY);

    const { data, loading } = useQuery(BOOKINGS_QUERY, {
        variables: {
          user: session?.me?._id,
        },
      });


  return (
    <View style={tw`flex-1`}>
    <ScrollView style={tw`flex-1 p-4 bg-[${theme.base}]`}>
      {
        data?.getBookings.map((item: Bookings, idx: any) => (
          item.cancelled && (
            <BookingsItem driver={getRandomDriver()} key={idx} item={item} />
          )
        ))

      }
    </ScrollView>
    </View>
  );
}


export default Cancelled;