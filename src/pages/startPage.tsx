import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { Inter_300Light, Inter_600SemiBold } from "@expo-google-fonts/inter";
import AppLoading from "./loading";
import Colors from "../utils/colors";

const StartPage = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Inter_300Light,
    Inter_600SemiBold,
  });

  const [isPressed, setPressed] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../../public/img/icon.png")} />
        <Text style={styles.title}>Errands</Text>
        <Text style={styles.slogan}>A Task Manager For You</Text>
      </View>
      <Pressable
        style={isPressed ? styles.buttonPressed : styles.button}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        onPress={() => {}}
      >
        <Text style={isPressed ? styles.buttonTextPressed : styles.buttonText}>
          Get Started
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 100,
    paddingBottom: 50,
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "Montserrat_500Medium",
    color: Colors.black,
  },
  slogan: {
    fontSize: 24,
    fontFamily: "Inter_300Light",
    color: Colors.grayText,
  },
  button: {
    backgroundColor: Colors.black,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    width: 350,
    borderRadius: 25,
  },
  buttonPressed: {
    backgroundColor: Colors.grayPress,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    width: 350,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: "Inter_600SemiBold",
  },
  buttonTextPressed: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
  },
});

export default StartPage;
