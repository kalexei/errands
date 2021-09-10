import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import SettingsPage from "./src/pages/settings";
import { ScreenParamList } from "./src/utils/ScreenParamList";
import IndexPage from "./src/pages/index";
import StartPage from "./src/pages/startPage";
import LoginPage from "./src/pages/login";

const Stack = createNativeStackNavigator<ScreenParamList>();

export default function App() {
  const [username, setUsername] = useState<string | null>();

  useEffect(() => {
    async function getUserName() {
      setUsername(await AsyncStorage.getItem("username"));
    }
    getUserName();
  }, []);

  if (!username) {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
          >
            <Stack.Screen name="Start" component={StartPage} />
            <Stack.Screen name="Login" component={LoginPage} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </>
    );
  } else {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={IndexPage} />
            <Stack.Screen name="Settings" component={SettingsPage} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </>
    );
  }
}
