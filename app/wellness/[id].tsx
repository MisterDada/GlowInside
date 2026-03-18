import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../Theme/ThemeContext";

// Duplicating the array here for simplicity, or ideally this would be exported from a central data file
const wellnessFocus = [
  {
    name: "Grounding Breath",
    description:
      "Focused breathing in the morning reduces anxiety and sets a peaceful daily tone.",
    timeRange: "3-6 mins",
    icon: "🧘‍♂️",
    content:
      "Take a deep breath in... hold for 4 seconds... and release slowly. Feel the tension leaving your body.",
  },
  {
    name: "Take a moment.",
    description: "Like a campfire for your mind — quiet, warm, and grounding.",
    timeRange: "3-6 mins",
    icon: "🔥",
    content:
      "Close your eyes. Imagine the warmth of a gentle fire. Let your thoughts pass by without judgment.",
  },
  {
    name: "Why Meditate",
    description: "A few calm minutes can ease stress and clear your mind",
    timeRange: "3-6 mins",
    icon: "✨",
    content:
      "Consistent meditation has been shown to reduce cortisol levels, improve focus, and enhance overall emotional wellbeing.",
  },
];

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function WellnessDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const Theme = useTheme();

  const routineId = parseInt(Array.isArray(id) ? id[0] : id || "0", 10);
  const routine = wellnessFocus[routineId] || wellnessFocus[0];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.background }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={{ color: "#003CFE", fontSize: 16, fontWeight: "bold" }}>
            ← Back
          </Text>
        </TouchableOpacity>

        <View style={styles.contentBox}>
          <Text style={styles.icon}>{routine.icon}</Text>
          <Text style={[styles.title, { color: Theme.text }]}>
            {routine.name}
          </Text>
          <Text style={[styles.duration, { color: "#FF6B81" }]}>
            Duration: {routine.timeRange}
          </Text>

          <Text style={[styles.description, { color: Theme.text }]}>
            {routine.description}
          </Text>

          <View style={styles.divider} />

          <Text style={[styles.body, { color: Theme.text }]}>
            {routine.content}
          </Text>
        </View>

        <TouchableOpacity style={styles.startBtn} onPress={() => router.back()}>
          <Text style={styles.startText}>Complete Routine</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: screenHeight * 0.05,
    paddingHorizontal: screenWidth * 0.05,
    flex: 1,
  },
  backButton: {
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  contentBox: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
    alignItems: "center",
  },
  icon: {
    fontSize: 60,
    marginBottom: 20,
  },
  title: {
    fontFamily: "AveriaSerifLibre-Bold",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  duration: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    opacity: 0.7,
    lineHeight: 24,
    marginBottom: 20,
  },
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "#EAEAEA",
    marginVertical: 20,
  },
  body: {
    fontSize: 18,
    textAlign: "center",
    lineHeight: 28,
  },
  startBtn: {
    marginTop: "auto",
    marginBottom: 40,
    backgroundColor: "#003CFE",
    padding: 18,
    borderRadius: 100,
    alignItems: "center",
  },
  startText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
