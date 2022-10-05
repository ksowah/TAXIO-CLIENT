import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, SafeAreaView } from 'react-native';
import tw from 'twrnc'
import Button from '../../components/Button';

const Profile = ({navigation}: any) => {

  const Logout = async () => {
    await AsyncStorage.removeItem('accessToken');
    console.log("token cleared");
    navigation.replace("Login")
}

  return (
    <SafeAreaView style={tw`flex`}>
      <Button 
        title={"Logout"}
        onPress={() => Logout()}
      />
    </SafeAreaView>
  );
}


export default Profile;