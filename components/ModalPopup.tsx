import { ReactNode, useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import tw from 'twrnc';
import Button from "./Button"

interface Props {
    title: string;
    subTitle: string;
    onPress?: () => void;
    image: any;
    showModal: boolean;
    setShowModal: any;
}

const ModalPoup = ({title, subTitle, onPress, image, showModal, setShowModal}: Props) => {

  const scaleValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    toggleModal();
  }, [showModal]);
  const toggleModal = () => {
    if (showModal) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        delay: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>

            <View style={tw`items-center overflow-hidden justify-between pb-5`}>
                <Image 
                    source={image}
                />

                <Text style={tw`text-[1.5rem] text-center text-[#FEBB1B]`}>
                    {title}
                </Text>

                <Text style={tw`text-white py-4 text-[16px] text-center`}>{subTitle}</Text>

                <Button onPress={onPress} title='OK'/>
            </View>
        </Animated.View>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#1f222a',
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default ModalPoup;