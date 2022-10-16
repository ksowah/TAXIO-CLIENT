import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "../../screens/Onboarding";
import Login from "../../screens/Authentication/Login";
import SignUp from "../../screens/Authentication/SignUp";
import PasswordLogin from "../../screens/Authentication/PasswordLogin";
import UpdateProfile from "../../screens/AccountSetup/UpdateProfile";
import CodeVerification from "../../screens/Authentication/CodeVerification";
import { useQuery } from "@apollo/client";
import { ME_QUERY } from "../../queries/meQuery";
import ForgotPassword from "../../screens/Authentication/fogotPassword/ForgotPassword";
import VerifyEmail from "../../screens/Authentication/fogotPassword/VerifyEmail";
import ChangePassword from "../../screens/Authentication/fogotPassword/ChangePassword";
import Home from "../../screens/Home";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../config/themeContext";
import theme from "../config/colors";
import SearchLocation from "../../screens/Home/subScreens/SearchLocation";
import SelectRide from "../../screens/Home/subScreens/SelectRide";
import Notifications from "../../screens/Home/subScreens/Notifications";
import Promos from "../../screens/Home/subScreens/Promos";
import Payment from "../../screens/Home/subScreens/Payment";
import DriverArrival from "../../screens/Home/subScreens/DriverArrival";
import DriverProfile from "../../screens/driver/DriverProfile";
import CancelTrip from "../../screens/driver/CancelTrip";

const Stack = createNativeStackNavigator();

const Routes: any = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState<Boolean | null>(
    null
  );

  const [mode, setMode] = useState(false);

  useEffect(() => {
    let eventListener: any = EventRegister.addEventListener(
      "switchTheme",
      (data) => {
        setMode(data);
      }
    );

    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);

  const check = async () => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunched");
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem("isAppFirstLaunched", "false");
    } else {
      setIsAppFirstLaunched(false); // toggle
    }
  };

  const { data: session } = useQuery(ME_QUERY);

  useEffect(() => {
    check();
  }, []);

  return (
    isAppFirstLaunched != null && (
      <themeContext.Provider value={mode === false ? theme.dark : theme.light}>
        <NavigationContainer>
          <Stack.Navigator>
            {isAppFirstLaunched && (
              <Stack.Screen
                options={{ headerShown: false }}
                name="Onboarding"
                component={Onboarding}
              />
            )}
            {!session?.me && (
              <>
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Login"
                  component={Login}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="SignUp"
                  component={SignUp}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="CodeVerification"
                  component={CodeVerification}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="PasswordLogin"
                  component={PasswordLogin}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="ForgotPassword"
                  component={ForgotPassword}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="VerifyEmail"
                  component={VerifyEmail}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="ChangePassword"
                  component={ChangePassword}
                />
              </>
            )}

            {!session?.me.profileUpdated && (
              <Stack.Screen
                options={{ headerShown: false }}
                name="UpdateProfile"
                component={UpdateProfile}
              />
            )}
            <Stack.Screen
              options={{ headerShown: false }}
              name="BaseHome"
              component={Home}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="SearchLocation"
              component={SearchLocation}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="SelectRide"
              component={SelectRide}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Notifications"
              component={Notifications}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Promos"
              component={Promos}
            />

            <Stack.Screen
              options={{ headerShown: false }}
              name="Payment"
              component={Payment}
            />
            {/* ----------// */}
            <Stack.Screen
              options={{ headerShown: false }}
              name="DriverArrival"
              component={DriverArrival}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="DriverProfile"
              component={DriverProfile}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="CancelTrip"
              component={CancelTrip}
            />            
          </Stack.Navigator>
        </NavigationContainer>
      </themeContext.Provider>
    )
  );
};

export default Routes;
