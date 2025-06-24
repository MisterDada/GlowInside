import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useAuthStore from "../../Store";

type AuthStore = {
  username: string;
};

const Login = () => {
  const { username } = useAuthStore() as AuthStore;

  const [value, setValue] = useState(0);
  // const [color, setColor] = useState("#BBBBB9");

  const [color, setColor] = useState(["#BBBBB9", "#000000"]);

  const moods = [
    {
      label: "Great",
      img: require("../../../assets/images/Emojis/BeamingFaceWithSmilingEyes.png"),
    },
    {
      label: "Okay",
      img: require("../../../assets/images/Emojis/SlightlySmilingFace.png"),
    },
    {
      label: "Anxious",
      img: require("../../../assets/images/Emojis/ConfusedFace.png"),
    },
    {
      label: "Down",
      img: require("../../../assets/images/Emojis/PensiveFace.png"),
    },
    {
      label: "Tired",
      img: require("../../../assets/images/Emojis/SleepingFace.png"),
    },
    {
      label: "Stressed",
      img: require("../../../assets/images/Emojis/Fire.png"),
    },
  ];

  // Function to handle color change based on slider value
  // const handleColorChange = (val: number) => {
  //   switch (val) {
  //     case 1:
  //       setColor("#00FF00"); // Green for Great
  //       break;
  //     case 2:
  //       setColor("#FFFF00"); // Yellow for Okay
  //       break;
  //     case 3:
  //       setColor("#FFA500"); // Orange for Anxious
  //       break;
  //     case 4:
  //       setColor("#FF0000"); // Red for Down
  //       break;
  //     case 5:
  //       setColor("#800080"); // Purple for Tired
  //       break;
  //     case 6:
  //       setColor("#0000FF"); // Blue for Stressed
  //       break;
  //     default:
  //       setColor("#BBBBB9"); // Default color
  //   }
  // };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#FAF9F6",
      }}
    >
      <View>{/* Maybe a back button in this view */}</View>
      <View>
        <View style={{ gap: 16, paddingHorizontal: 30 }}>
          <Text style={{ textAlign: "center", color: "#BBBBB9", fontSize: 16 }}>
            Vibe Check!
          </Text>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "AveriaSerifLibre-Bold",
            }}
          >
            How are you feeling today, {username}?
          </Text>
        </View>
        <View style={{ paddingHorizontal: 30, paddingTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {moods.map((mood, idx) => (
              <View key={mood.label} style={{ alignItems: "center" }}>
                <Image source={mood.img} />
                <Text
                  style={{
                    color: value === idx + 1 ? "#121212" : "#BBBBB9",
                  }}
                >
                  {mood.label}
                </Text>
              </View>
            ))}
          </View>
          <Slider
            style={{ width: "100%", height: 40, alignSelf: "center" }}
            thumbImage={require("../../../assets/images/SliderThumb.png")}
            thumbTintColor="#003CFE"
            minimumValue={1}
            maximumValue={6}
            step={1}
            value={value}
            onValueChange={(val) => {
              setValue(val);
              setColor([color[1], color[1]]);
            }}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#FFFFFF"
          />
        </View>
      </View>
      <View style={{ paddingHorizontal: 30 }}>
        <Pressable>
          <LinearGradient
            colors={["#007bff", "#003cfe"]} // gradient blue shades
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>
              Continue
            </Text>
          </LinearGradient>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#003CFE",
    padding: 10,
    marginVertical: 10,
    borderRadius: 100,
    justifyContent: "center",
    width: "100%",
    height: 47,
  },
});
