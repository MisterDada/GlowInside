import { useTheme } from "@/Theme/ThemeContext";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Explore = () => {
  const Theme = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.background }}>
      <View>
        <Text style={{ color: Theme.text }}>Explore</Text>
      </View>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
