import React from "react";
import { Image, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <Image
      source={require("../assets/images/LogoWhite.png")}
      style={{
        width: 100,
        height: 100,
        resizeMode: "contain",
        marginBottom: 20,
      }}
    />
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
