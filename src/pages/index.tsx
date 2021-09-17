import React, { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { UserInfoContext } from "../utils/context";
import { INavigationProps } from "../utils/types";

const IndexPage = ({ navigation }: INavigationProps<"Home">) => {
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
