import AsyncStorage from "@react-native-async-storage/async-storage";


export const Logout = (navigation: any) => {
    AsyncStorage.removeItem('accessToken');
    console.log("token cleared");
    
}