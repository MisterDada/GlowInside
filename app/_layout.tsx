import * as font from "expo-font";
import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
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
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      const timer = setTimeout(() => setShowSplash(false), 2000); // 2000ms = 2 seconds
      return () => clearTimeout(timer);
    }
    fadeOut();
  }, [fontsLoaded]);

  if (!fontsLoaded || showSplash) {
    return (
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
    );
  }

  return <StackNavigator />;
}
