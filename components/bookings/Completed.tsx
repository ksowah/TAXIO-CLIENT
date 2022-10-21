import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { View, ScrollView } from 'react-native';
import tw from 'twrnc'
import { BOOKINGS_QUERY } from '../../queries/bookingsQuery';
import { ME_QUERY } from '../../queries/meQuery';
import { Theme } from '../../types';
import themeContext from '../config/themeContext';
import BookingsItem from './BookingsItem';
import { driverDetails } from './fakeDriverDetails';

const Completed = () => {

    const theme: Theme = useContext(themeContext);

    const { data: session } = useQuery(ME_QUERY);

    const { data, loading } = useQuery(BOOKINGS_QUERY, {
        variables: {
          user: session?.me?._id,
        },
      });

    const getRandomDriver = () => {
        return driverDetails[Math.floor(Math.random() * driverDetails.length)]
    }
    


  return (
    <View style={tw`flex-1`}>
    <ScrollView style={tw`flex-1 p-4 bg-[${theme.base}]`}>
      {
        data?.getBookings.map((item: any, idx: any) => (
          <BookingsItem image={getRandomDriver().image} key={idx} item={item} />
        ))

      }
    </ScrollView>
    </View>
  );
}


export default Completed;