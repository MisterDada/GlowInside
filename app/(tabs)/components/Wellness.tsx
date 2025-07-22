import { useTheme } from "@/Theme/ThemeContext";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardFace from "../../../assets/images/CardFace.svg";
import Meditate from "../../../assets/images/Meditate.svg";

const wellnessFocus = [
  {
    name: "Grounding Breath",
    description:
      "Focused breathing in the morning reduces anxiety and sets a peaceful daily tone.",
    timeRange: "3-6 mins",
    image: Meditate,
  },
  {
    name: "Take a moment.",
    description: "Like a campfire for your mind — quiet, warm, and grounding.",
    timeRange: "3-6 mins",
    image: Meditate,
  },
  {
    name: "Why Meditate",
    description: "A few calm minutes can ease stress and clear your mind",
    timeRange: "3-6 mins",
    image: CardFace,
  },
];

const Wellness = () => {
  const Theme = useTheme();
  return (
    <View>
      {wellnessFocus.map((focus, id) => (
        <View key={id} style={[styles.focus, { backgroundColor: Theme.card }]}>
          <View style={{ maxWidth: "50%", gap: 5, padding: 20 }}>
            <Text style={{ fontSize: 16, color: "#FF6B81" }}>{focus.name}</Text>
            <Text style={{ color: Theme.text, fontSize: 12, opacity: 0.6 }}>
              {focus.description}
            </Text>
            <Text style={{ color: Theme.text, fontSize: 12, opacity: 0.6 }}>
              {focus.timeRange}
            </Text>
          </View>
          <View>
            <focus.image />
          </View>
        </View>
      ))}
    </View>
  );
};

export default Wellness;

const styles = StyleSheet.create({
  focus: {
    minHeight: 80,
    width: 350,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    alignSelf: "flex-end",
    height: 120,
    flexDirection: "row",
    overflow: "hidden",
  },
});
