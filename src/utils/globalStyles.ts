import { StyleSheet } from "react-native";
import Colors from "./colors";

export const primaryButton = StyleSheet.create({
  button: {
    backgroundColor: Colors.black,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    width: 350,
    borderRadius: 25,
    alignSelf: "center",
  },
  buttonPressed: {
    backgroundColor: Colors.grayPress,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    width: 350,
    borderRadius: 25,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: "Inter_600SemiBold",
    alignSelf: "center",
  },
  buttonTextPressed: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
    alignSelf: "center",
  },
});
