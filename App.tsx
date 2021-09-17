import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Header from "./src/components/Header";
import IndexPage from "./src/pages/index";
import LoginPage from "./src/pages/login";
import SettingsPage from "./src/pages/settings";
import StartPage from "./src/pages/startPage";
import { UserInfoContext } from "./src/utils/context";
import { IScreenParamList } from "./src/utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator<IScreenParamList>();

export default function App() {
  const [username, setUsername] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    async function getUserName() {
      setUsername(await AsyncStorage.getItem("username"));
    }
    getUserName();
  }, []);

  if (!username) {
    return (
      <>
        <UserInfoContext.Provider
          value={{ photo, username, setUsername, setPhoto }}
        >
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="Home"
            >
              <Stack.Screen name="Start" component={StartPage} />
              <Stack.Screen name="Login" component={LoginPage} />
            </Stack.Navigator>
          </NavigationContainer>
        </UserInfoContext.Provider>
        <StatusBar style="auto" />
      </>
    );
  } else {
    return (
      <>
        <UserInfoContext.Provider
          value={{ username, photo, setUsername, setPhoto }}
        >
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                header: Header,
              }}
            >
              <Stack.Screen name="Home" component={IndexPage} />
              <Stack.Screen name="Settings" component={SettingsPage} />
            </Stack.Navigator>
          </NavigationContainer>
        </UserInfoContext.Provider>
        <StatusBar style="auto" />
      </>
    );
  }
}
