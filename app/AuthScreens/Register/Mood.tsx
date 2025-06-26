import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from "@react-native-community/slider";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
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

type RootStackParamList ={
  Tailor: undefined;
}

const Login = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { username } = useAuthStore() as AuthStore;

  const [value, setValue] = useState(1);

  const [color, setColor] = useState(["#BBBBB9", "#000000"]);
  const [selectedMood, setSelectedMood] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const setMood = () => {
      if (value === 1) {
        setSelectedMood("Great");
      } else if (value === 2) {
        setSelectedMood("Okay");
      } else if (value === 3) {
        setSelectedMood("Anxious");
      } else if (value === 4) {
        setSelectedMood("Down");
      } else if (value === 5) {
        setSelectedMood("Tired");
      } else if (value === 6) {
        setSelectedMood("Stressed");
      }
    };
    setMood();
  }, [value]);

  const Load = async () => {
    await AsyncStorage.setItem("Mood", selectedMood);

    setLoading(true);
    navigation.navigate("Tailor")
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return;
  };

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
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 106,
          }}
        >
          <Text style={{ color: "#BBBBB9" }}>I'm feeling</Text>
          <Text>{selectedMood}</Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Pressable onPress={Load}>
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
    alignItems: "center",
  },
});
