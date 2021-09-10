import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Container from "../components/Container";
import Colors from "../utils/colors";
import { UserInfoContext } from "../utils/context";
import { primaryButton } from "../utils/globalStyles";
import AppLoading from "./loading";

const LoginPage = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_400Regular,
  });

  const [isProceedPressed, setProceedPressed] = useState(false);

  const [usernameInput, setUsernameInput] = useState("");

  const { photo, setPhoto, setUsername } = useContext(UserInfoContext);

  useEffect(() => {
    (async () => {
      if ((await ImagePicker.getMediaLibraryPermissionsAsync()).granted) {
        return;
      }
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const getPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      if (setPhoto && result.base64) {
        setPhoto(result.base64);
      }
    }
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        <View style={styles.loginForm}>
          <Text style={styles.title}>Set up your profile</Text>
          <Pressable onPress={() => getPhoto()}>
            {photo ? (
              <Image width={300} height={300} source={{ uri: photo }} />
            ) : (
              <View style={styles.addPhotoContainer}>
                <Entypo
                  style={styles.addPhotoIcon}
                  name="camera"
                  size={24}
                  color="black"
                />
              </View>
            )}
          </Pressable>
          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>What should we call you?</Text>
            <TextInput
              style={styles.inputField}
              value={usernameInput}
              onChangeText={setUsernameInput}
              placeholder={"Enter your name"}
              placeholderTextColor={Colors.black}
            />
          </View>
        </View>
        <Pressable
          style={
            isProceedPressed
              ? primaryButton.buttonPressed
              : primaryButton.button
          }
          onPressIn={() => setProceedPressed(true)}
          onPressOut={() => setProceedPressed(false)}
          onPress={() => {
            if (setUsername) {
              setUsername(usernameInput);
            }
          }}
        >
          <Text
            style={
              isProceedPressed
                ? primaryButton.buttonTextPressed
                : primaryButton.buttonText
            }
          >
            Proceed
          </Text>
        </Pressable>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  loginForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 30,
  },
  addPhotoContainer: {
    backgroundColor: Colors.grayPress,
    padding: 30,
    borderRadius: 50,
    marginVertical: 50,
  },
  addPhotoIcon: {
    fontSize: 42,
  },
  inputView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  inputLabel: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
    marginBottom: 25,
  },
  inputField: {
    backgroundColor: Colors.grayPress,
    textAlign: "center",
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    padding: 15,
    borderRadius: 25,
  },
  title: {
    fontFamily: "Montserrat_500Medium",
    alignSelf: "center",
    fontSize: 24,
  },
});

export default LoginPage;
