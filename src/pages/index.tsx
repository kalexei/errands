import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { UserInfoContext } from "../utils/context";
import { IScreenParamList } from "../utils/types";

type Props = {
  navigation: NativeStackNavigationProp<IScreenParamList, "Home">;
};

const IndexPage = ({ navigation }: Props) => {
  const { username } = useContext(UserInfoContext);

  return (
    <View style={styles.indexPage}>
      <Text style={styles.text}>Hello {username}!</Text>
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
