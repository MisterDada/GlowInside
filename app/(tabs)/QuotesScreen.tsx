import { useTheme } from "@/Theme/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Theme = useTheme();

const QuotesScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme.background,
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text onPress={navigation.goBack}>Go back</Text>
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
