import { useTheme } from "@/Theme/ThemeContext";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Profile = () => {
  const Theme = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.background }}>
      <View>
        <Text style={{ color: Theme.text }}>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
