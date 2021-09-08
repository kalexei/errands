import React from "react";
import { StyleSheet, View, Text } from "react-native";

const IndexPage = () => {
  return (
    <View style={styles.indexPage}>
      <Text style={styles.text}>index works!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  indexPage: {},
  text: {
    fontSize: 90,
  },
});

export default IndexPage;
