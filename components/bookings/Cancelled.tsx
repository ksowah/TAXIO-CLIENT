import { useContext } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc'
import { Theme } from '../../types';
import themeContext from '../config/themeContext';

const Cancelled = () => {

    const theme: Theme = useContext(themeContext);

  return (
    <View style={tw`flex-1 bg-[${theme.base}]`}>
        
    </View>
  );
}


export default Cancelled;