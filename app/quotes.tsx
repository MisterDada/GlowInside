import { useTheme } from "@/Theme/ThemeContext";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Theme = useTheme();

const QuotesScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme.background,
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text onPress={router.back}>Go back</Text>
          <Text style={{ fontFamily: "AveriaSerifLibre-Bold", fontSize: 32 }}>
            Daily Spark
          </Text>
        </View>
        <View style={styles.quotesbox}>
          <Text>Hello</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default QuotesScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: screenHeight * 0.05,
    alignItems: "center",
    paddingHorizontal: screenWidth * 0.05,
    marginBottom: 38,
  },
  quotesbox: {
    paddingHorizontal: screenWidth * 0.05,
    backgroundColor: "#ff6b8132",
    width: "100%",
    height: screenHeight * 0.8,
    borderRadius: 30,
  },
  header: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: screenHeight * 0.02,
  },
});
