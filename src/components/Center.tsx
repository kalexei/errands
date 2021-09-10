import React from "react";
import { StyleSheet, View } from "react-native";

const Center: React.FC = ({ children }) => {
  return <View style={styles.center}>{children}</View>;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Center;
