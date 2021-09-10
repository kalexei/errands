import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { ScreenParamList } from "../utils/ScreenParamList";

type Props = {
  navigation: NativeStackNavigationProp<ScreenParamList, "Home">;
};

const IndexPage = ({ navigation }: Props) => {
  return (
    <View style={styles.indexPage}>
      <Text style={styles.text}>index works!</Text>
      <Button
        title={"Settings"}
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  indexPage: {
    flex: 1,
  },
  text: {
    fontSize: 90,
  },
});

export default IndexPage;
