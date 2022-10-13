import { useContext, useMemo, useRef } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc'
import themeContext from '../../../components/config/themeContext';
import Map from '../../../components/Map';
import { Theme } from '../../../types';

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const DriverArrival = ({navigation}: any) => {

    const theme: Theme = useContext(themeContext);

    const ref = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ["15%", "45%"], []);

  return (
    <View style={tw`flex-1 bg-[${theme.base}]`}>
      <Map navigation={navigation} />

      <BottomSheet
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        handleStyle={tw`bg-[${theme.base}] rounded-t-3xl`}
        handleIndicatorStyle={tw`bg-[${theme.border}]`}
        backgroundStyle={tw`bg-[${theme.base}] shadow-xl`}
      >


      </BottomSheet>
    </View>
  );
}


export default DriverArrival;