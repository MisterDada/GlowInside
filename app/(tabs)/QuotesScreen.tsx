import { useTheme } from "@/Theme/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const QuotesScreen = () => {
  const navigation = useNavigation();

  const Theme = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme.background,
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "flex-start",
            marginBottom: screenHeight * 0.05,
          }}
        >
          <Text onPress={navigation.goBack}>Go back</Text>
          <Text style={{ fontFamily: "AveriaSerifLibre-Bold", fontSize: 32 }}>
            Daily Spark
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: screenWidth * 0.05,
            backgroundColor: "blue",
            width: "100%",
            height: screenHeight * 0.8,
          }}
        >
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
});
