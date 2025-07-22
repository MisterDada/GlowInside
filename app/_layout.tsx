import * as font from "expo-font";
import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "../Theme/ThemeContext";
import StackNavigator from "./Navigation/StackNavigator";
import SplashScreen from "./SplashScreen";

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
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
      const timer = setTimeout(() => setShowSplash(false), 2000);
      return () => clearTimeout(timer);
    }
    fadeOut();
  }, [fontsLoaded]);

  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {!fontsLoaded || showSplash ? (
          <Animated.View
            style={[
              {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FF6B81",
              },
              { opacity: fadeAnim },
            ]}
          >
            <SplashScreen />
          </Animated.View>
        ) : (
          <StackNavigator />
        )}
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
