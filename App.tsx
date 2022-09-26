import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Onboarding from "./screens/Onboarding";
import Login from "./screens/Authentication/Login";
import SignUp from "./screens/Authentication/SignUp";
import PasswordLogin from "./screens/Authentication/PasswordLogin";
import UpdateProfile from "./screens/AccountSetup/UpdateProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState<Boolean | null>(
    null
  );

  const check = async () => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunched");
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem("isAppFirstLaunched", "false");
    } else {
      setIsAppFirstLaunched(false); // toggle 
    }
  };

  useEffect(() => {
    check();
  }, []);

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator>
          {isAppFirstLaunched && (
            <Stack.Screen
              options={{ headerShown: false }}
              name="Onboarding"
              component={Onboarding}
            />
          )}
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login}/>
          <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp}/>
          <Stack.Screen options={{ headerShown: false }} name="PasswordLogin" component={PasswordLogin}/>
          <Stack.Screen options={{ headerShown: false }} name="UpdateProfile" component={UpdateProfile}/>
          <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}
