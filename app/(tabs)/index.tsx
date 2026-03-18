import { useEffect, useState } from "react";

import {
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useTheme } from "../../Theme/ThemeContext";
import QuotesTile from "@/Components/Home/QuotesTile";
import Wellness from "@/Components/Home/Wellness";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const Theme = useTheme();
const fontSize = Dimensions.get("screen").fontScale;

const date = new Date();
const formatDate = date.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

export default function Index() {
  const [timeOfDay, setTimeOfDay] = useState("");

  const day = new Date();
  const time = day.getHours();

  const getTimeOfDay = () => {
    if (time >= 0 && time < 12) {
      setTimeOfDay("Morning");
    } else if (time >= 12 && time < 16) {
      setTimeOfDay("Afternoon");
    } else {
      setTimeOfDay("Evening");
    }
  };

  useEffect(() => {
    getTimeOfDay();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.background }}>
      <StatusBar barStyle="default" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 55 }}
      >
        <View style={styles.container}>
          <View style={{ flexDirection: "row", gap: 10, marginBottom: 24 }}>
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#EAEAEA",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                ...(Platform.OS === "ios"
                  ? {
                      boxShadow: "0px 7px 3.84px rgba(0, 0, 0, 0.25)",
                    }
                  : {
                      elevation: 5,
                    }),
              }}
            >
              <Text style={{ fontSize: 20 }}>🙍‍♂️</Text>
              {/* Change this text to use profile picture later later */}
            </View>
            <View
              style={{
                height: 40,
                width: 53,
                backgroundColor: "white",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 20, textAlign: "center" }}>⚡2</Text>
              {/* Change this text to use streaks later */}
            </View>
          </View>
          <View style={{ gap: 4 }}>
            <Text
              style={{
                fontFamily: "AveriaSerifLibre-Regular",
                fontWeight: "bold",
                fontSize: 32,
                color: Theme.text,
              }}
            >
              Good {timeOfDay}
            </Text>
            <Text style={{ fontSize: 16, color: Theme.text, opacity: 0.4 }}>
              {formatDate}
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: screenWidth * 0.05,
            alignItems: "center",
          }}
        >
          <QuotesTile />
        </View>

        <View
          style={{ paddingHorizontal: screenWidth * 0.05, paddingBottom: 20 }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: Theme.text,
            }}
          >
            Your current wellness routine
          </Text>
        </View>
        <View style={{ flex: 1, paddingBottom: 20, paddingHorizontal: 20 }}>
          <Wellness />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: screenHeight * 0.05,
    alignItems: "flex-start",
    paddingHorizontal: screenWidth * 0.05,
    marginBottom: 38,
  },
});
