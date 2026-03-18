import { useTheme } from "../../Theme/ThemeContext";
import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Profile = () => {
  const Theme = useTheme();

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
              marginBottom: 30,
            }}
          >
            Profile
          </Text>

          <View style={styles.profileHeader}>
            <View style={styles.avatar}>
              <Text style={{ fontSize: 40 }}>🙍‍♂️</Text>
            </View>
            <View>
              <Text style={[styles.name, { color: Theme.text }]}>Your Name</Text>
              <Text style={{ color: Theme.text, opacity: 0.6 }}>member since 2026</Text>
            </View>
          </View>

          <View style={{ gap: 20, width: "100%", marginTop: 40 }}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Days Active</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>Routines Completed</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: screenHeight * 0.05,
    alignItems: "flex-start",
    paddingHorizontal: screenWidth * 0.05,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: "#EAEAEA",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  statBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#003CFE",
  },
  statLabel: {
    fontSize: 16,
    color: "#555",
  },
});
