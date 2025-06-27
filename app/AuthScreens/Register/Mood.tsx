import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from "@react-native-community/slider";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Anxious from "../../../assets/images/Emojis/Anxious.svg";
import Down from "../../../assets/images/Emojis/Down.svg";
import Stressed from "../../../assets/images/Emojis/Fire.svg";
import Great from "../../../assets/images/Emojis/Great.svg";
import Smiley from "../../../assets/images/Emojis/Smiley.svg";
import Tired from "../../../assets/images/Emojis/Tired.svg";
import useAuthStore from "../../Store";

type AuthStore = {
  username: string;
};

type RootStackParamList = {
  Tailor: undefined;
};

const Mood = () => {
  const showAnim = useRef(new Animated.Value(0)).current;

  const showMood = () => {
    showAnim.setValue(0);
    Animated.timing(showAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleSliderChange = (value: number) => {
    setValue(value);
    showMood();
    setColor([color[1], color[1]]);
    showMood(); // Restart animation
  };

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
    navigation.navigate("Tailor");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#FAF9F6",
      }}
    >
      <StatusBar barStyle={"dark-content"} />
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
            <Smiley width={40} height={40} />
            <Great width={40} height={40} />
            <Anxious width={40} height={40} />
            <Down width={40} height={40} />
            <Tired width={40} height={40} />
            <Stressed width={40} height={40} />
          </View>
          <Slider
            style={{ width: "100%", height: 40, alignSelf: "center" }}
            thumbImage={require("../../../assets/images/SliderThumb.png")}
            thumbTintColor="#003CFE"
            minimumValue={1}
            maximumValue={6}
            step={1}
            value={value}
            onValueChange={handleSliderChange}
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
          <Animated.Text style={[{ color: "black" }, { opacity: showAnim }]}>
            {selectedMood}
          </Animated.Text>
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

export default Mood;

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
