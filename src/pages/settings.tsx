import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { IScreenParamList } from "../utils/types";

type Props = {
  navigation: NativeStackNavigationProp<IScreenParamList, "Settings">;
};

const SettingsPage = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Settings page</Text>
      <Button title={"Home"} onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default SettingsPage;
