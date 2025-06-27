import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function SelectableBox() {
  const [selected, setSelected] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FAF9F6",
        justifyContent: "space-between",
      }}
    >
      <View></View>
      <View
        style={{
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ gap: 16, paddingHorizontal: 30, paddingBottom: 38.26 }}>
          <Text style={{ textAlign: "center", color: "#BBBBB9", fontSize: 16 }}>
            Your Goals
          </Text>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "AveriaSerifLibre-Bold",
            }}
          >
            Is there anything you’d like to focus on?
          </Text>
        </View>
        <Pressable onPress={() => setSelected(!selected)}>
          <View
            style={[
              styles.box,
              selected ? styles.boxSelected : styles.boxUnselected,
            ]}
          >
            
            <Text>Manage Anxiety</Text>
            <View>{selected && <Text style={styles.checkmark}>✓</Text>}</View>
          </View>
        </Pressable>
      </View>
      <View style={{ paddingHorizontal: 20, paddingBottom: 40 }}>
        <Pressable>
          <LinearGradient
            colors={["#007bff", "#003cfe"]} // gradient blue shades
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                "Continue"
              )}
            </Text>
          </LinearGradient>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 304,
    height: 50,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  boxSelected: {
    borderColor: "#FF6B81",
    borderWidth: 2,
    gap: 10
  },
  boxUnselected: {
    borderColor: "gray",
    backgroundColor: "white",
  },
  checkmark: {
    fontSize: 18,
    color: "#FF6B81",
  },
  button: {
    backgroundColor: "#003CFE",
    padding: 10,
    marginVertical: 10,
    borderRadius: 100,
    justifyContent: "center",
    width: "100%",
    height: 47,
    alignItems: "center",
  },
});
