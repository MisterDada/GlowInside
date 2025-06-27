import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function SelectableBox() {
  const [selectedBoxes, setSelectedBoxes] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const boxes = [
    { id: 1, label: "Manage Anxiety" },
    { id: 2, label: "Boost Daily Mood" },
    { id: 3, label: "Improve Sleep" },
    { id: 4, label: "Be More Mindful" },
    { id: 5, label: "Build Positive Habits" },
    { id: 6, label: "I'm Not Sure" },
  ];

  const toggleBox = (id: number) => {
    setSelectedBoxes((prev) =>
      prev.includes(id) ? prev.filter((boxId) => boxId !== id) : [...prev, id]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF9F6" }}>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.textGroup}>
          <Text style={styles.subtitle}>Your Goals</Text>
          <Text style={styles.title}>
            Is there anything you’d like to focus on?
          </Text>
        </View>

        <View style={styles.boxList}>
          {boxes.map((box) => {
            const selected = selectedBoxes.includes(box.id);
            return (
              <Pressable
                key={box.id}
                onPress={() => toggleBox(box.id)}
                style={[
                  styles.box,
                  selected ? styles.boxSelected : styles.boxUnselected,
                ]}
              >
                <Text
                  style={[
                    styles.boxLabel,
                    selected && styles.selectedText,
                  ]}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                >
                  {box.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.footer}>
          <Pressable style={{width: screenWidth * 0.85}}>
            <LinearGradient
              colors={["#007bff", "#003cfe"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={styles.buttonText}>Continue</Text>
              )}
            </LinearGradient>
          </Pressable>
          <Text style={styles.later}>I'll do this later</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
    justifyContent: "center",
    paddingTop: screenHeight * 0.2
  },
  textGroup: {
    alignItems: "center",
    marginBottom: 30,
  },
  subtitle: {
    color: "#BBBBB9",
    fontSize: 16,
    textAlign: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "AveriaSerifLibre-Bold",
    marginTop: 10,
  },
  boxList: {
    gap: 12,
    alignItems: "center",
  },
  box: {
    width: screenWidth * 0.85,
    height: 50,
    borderWidth: 2,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  boxSelected: {
    borderColor: "#FF6B81",
    backgroundColor: "#FFF0F3",
  },
  boxUnselected: {
    borderColor: "#D3D3D3",
  },
  boxLabel: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  selectedText: {
    color: "#FF6B81",
  },
  footer: {
    marginTop: 40,
    alignItems: "center",
    gap: 12,
  },
  button: {
    padding: 10,
    borderRadius: 100,
    width: "100%",
    height: 47,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  later: {
    textAlign: "center",
    color: "#BBBBB9",
    fontSize: 14,
  },
});
