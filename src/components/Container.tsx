import React from "react";
import { StyleSheet, View } from "react-native";

const Container: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingBottom: 30,
  },
});

export default Container;
