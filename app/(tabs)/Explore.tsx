import { useTheme } from "../../Theme/ThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Explore = () => {
  const router = useRouter();
  const Theme = useTheme();

  const Logout = async () => {
    try {
      await AsyncStorage.removeItem("userId");
      router.replace("/auth/register");
    } catch (error: any) {
      Alert.alert(error.message || "An error occurred");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.background }}>
      <StatusBar barStyle="default" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View style={styles.container}>
          <Text
            style={{
              fontFamily: "AveriaSerifLibre-Bold",
              fontWeight: "bold",
              fontSize: 32,
              color: Theme.text,
              marginBottom: 20,
            }}
          >
            Explore
          </Text>
          <Text style={{ fontSize: 16, color: Theme.text, opacity: 0.7, marginBottom: 40 }}>
            Discover new ways to enhance your wellbeing and find balance.
          </Text>

          {/* Placeholder Content similar to existing tiles */}
          <View style={{ gap: 20, width: "100%" }}>
            <View style={[styles.card, { backgroundColor: "#FFF0F3" }]}>
              <Text style={styles.cardTitle}>Mindfulness</Text>
              <Text style={styles.cardDesc}>Connect with the present moment.</Text>
            </View>
            <View style={[styles.card, { backgroundColor: "#E6F0FF" }]}>
              <Text style={styles.cardTitle}>Sleep Sounds</Text>
              <Text style={styles.cardDesc}>Drift off with calming nature sounds.</Text>
            </View>
            
            <TouchableOpacity onPress={Logout} style={styles.logoutBtn}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    paddingTop: screenHeight * 0.05,
    alignItems: "flex-start",
    paddingHorizontal: screenWidth * 0.05,
  },
  card: {
    padding: 24,
    borderRadius: 20,
    width: "100%",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  cardDesc: {
    fontSize: 14,
    color: "#555",
  },
  logoutBtn: {
    marginTop: 40,
    backgroundColor: "#FF6B81",
    padding: 16,
    borderRadius: 100,
    alignItems: "center",
  },
  logoutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
