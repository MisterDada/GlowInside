import React from "react";
import { Image, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <Image
      source={require("../assets/images/LogoWhite.png")}
      resizeMode="contain"
      style={{
        width: 100,
        height: 100,
        marginBottom: 20,
      }}
    />
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
