import { Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

interface Props extends NativeStackHeaderProps {}

const Header = ({ navigation }: Props) => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <View style={styles.container}></View>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Header works!</Text>
        <Button
          title="Settings"
          onPress={() => navigation.navigate("Settings")}
        />
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
  title: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 24,
  },
});

export default Header;
