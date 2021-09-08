import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import IndexPage from "./src/pages/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StartPage from "./src/pages/startPage";

export default function App() {
  const [username, setUsername] = useState<string | null>();

  useEffect(() => {
    async function getUserName() {
      setUsername(await AsyncStorage.getItem("username"));
    }
    getUserName();
  }, []);

  return (
    <View style={styles.container}>
      {username ? <IndexPage /> : <StartPage />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
