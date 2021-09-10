import { Montserrat_500Medium, useFonts } from "@expo-google-fonts/montserrat";
import ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Button, Image, Platform, StyleSheet, Text } from "react-native";
import Container from "../components/Container";
// import Colors from "../utils/colors";
import AppLoading from "./loading";

const LoginPage = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
  });

  const [avatarURI, setAvatarURI] = useState<string | null>();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync().catch(err => {
            throw new Error(err);
          });
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const getPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [1, 1],
      allowsMultipleSelection: false,
      quality: 1,
    });

    if (!result.cancelled) {
      setAvatarURI(result.uri);
    }
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        <Text style={styles.title}>Set up your profile</Text>
        {avatarURI ? (
          <Image width={300} height={300} source={{ uri: avatarURI }} />
        ) : null}
        <Button title="Get Photo" onPress={() => getPhoto()} />
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Montserrat_500Medium",
    alignSelf: "center",
    fontSize: 24,
  },
});

export default LoginPage;
