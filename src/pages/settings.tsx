import React from "react";
import { Button, Text, View } from "react-native";
import { INavigationProps } from "../utils/types";

const SettingsPage = ({ navigation }: INavigationProps<"Settings">) => {
  return (
    <View>
      <Text>Settings page</Text>
      <Button title={"Home"} onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default SettingsPage;
