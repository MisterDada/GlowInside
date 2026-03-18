import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await AsyncStorage.getItem("userId");
        if (user) {
          setIsLoggedIn(true);
        }
      } catch (e) {
        // Ignore or handle
      } finally {
        setIsReady(true);
      }
    };

    checkUser();
  }, []);

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#FF6B81" />
      </View>
    );
  }

  return <Redirect href={isLoggedIn ? "/(tabs)" : "/auth/register"} />;
}
