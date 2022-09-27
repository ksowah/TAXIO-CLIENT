import AsyncStorage from "@react-native-async-storage/async-storage";

export const Logout = (navigation: any) => {
    AsyncStorage.removeItem('accessToken');
    navigation?.navigate('Login')
}