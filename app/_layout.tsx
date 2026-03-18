import * as font from "expo-font";
import { Stack } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "../Theme/ThemeContext";
import SplashScreen from "./SplashScreen";

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const loadFonts = async () => {
      await font.loadAsync({
        "AveriaSerifLibre-Bold": require("../assets/fonts/Averia_Serif_Libre/AveriaSerifLibre-Bold.ttf"),
        "AveriaSerifLibre-Regular": require("../assets/fonts/Averia_Serif_Libre/AveriaSerifLibre-Regular.ttf"),
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
    fadeOut();
  }, [fontsLoaded]);

  if (!fontsLoaded || showSplash) {
    return (
      <View style={{ flex: 1, backgroundColor: "#FF6B81" }}>
        <SplashScreen />
      </View>
    );
  }

  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="auth" />
          <Stack.Screen name="quotes" />
          <Stack.Screen name="wellness" />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
