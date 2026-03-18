import ModalPage from "@/Components/Modal";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Lightbulb from "../../assets/images/Lightbulb.svg";
import Success from "../../assets/images/Success.svg";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function SelectableBox() {
  const router = useRouter();

  const [selectedBoxes, setSelectedBoxes] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
      prev.includes(id) ? prev.filter((boxId) => boxId !== id) : [...prev, id],
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
                  style={[styles.boxLabel, selected && styles.selectedText]}
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
          <Pressable
            onPress={() => setShowModal(true)}
            style={{ width: screenWidth * 0.85 }}
          >
            <LinearGradient
              colors={["#007bff", "#003cfe"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </LinearGradient>
          </Pressable>
          <Text style={styles.later}>I'll do this later</Text>
        </View>
        <ModalPage visible={showModal} onClose={() => setShowModal(false)}>
          <View>
            <Success style={{ zIndex: 1 }} />
          </View>
          <View>
            <View style={{ gap: 18 }}>
              <Text
                style={{
                  fontFamily: "AveriaSerifLibre-Bold",
                  fontSize: 32,
                  textAlign: "center",
                }}
              >
                You're All Set To Glow
              </Text>
              <Text style={{ textAlign: "center", lineHeight: 24 }}>
                {" "}
                Welcome to GlowInside✨ – your space to grow, heal, and let your
                authentic self shine.
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 12,
                flexDirection: "row",
                padding: 12,
                gap: 10,
                justifyContent: "center",
                alignItems: "flex-start",
                marginVertical: 16,
              }}
            >
              <View>
                <Lightbulb />
              </View>
              <View style={{ justifyContent: "center", flex: 1 }}>
                <Text style={{ color: "#333333", marginBottom: 4 }}>
                  Quick Glow tip
                </Text>
                <Text
                  style={{ fontSize: 13, lineHeight: 20, letterSpacing: -0.5 }}
                >
                  Explore different goals – you might discover something that
                  resonates unexpectedly. Trust your instincts and stay curious
                  about what feels right
                </Text>
              </View>
            </View>
            <Pressable
              onPress={() => {
                setShowModal(false);
                router.replace("/(tabs)");
              }}
              style={{ width: screenWidth * 0.85 }}
            >
              <LinearGradient
                colors={["#007bff", "#003cfe"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Let's see my Board</Text>
              </LinearGradient>
            </Pressable>
          </View>
        </ModalPage>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
    justifyContent: "center",
    paddingTop: screenHeight * 0.2,
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
    borderWidth: 0.5,
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
  },
  later: {
    textAlign: "center",
    color: "#BBBBB9",
    fontSize: 14,
  },
});
