import { useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CardFace from "../../assets/images/CardFace.svg";
import Meditate from "../../assets/images/Meditate.svg";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
// const fontSize = Dimensions.get("screen").fontScale;

const formatDate = (date: Date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const dayOfMonth = date.getDate();

  const ordinalSuffix = (n: number) => {
    if (n >= 11 && n <= 13) return n + "th";
    switch (n % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
      default:
        return n + "th";
    }
  };

  return `${dayName}, ${monthName} ${ordinalSuffix(dayOfMonth)}`;
};

export default function Index() {
  const wellnessFocus = [
    {
      name: "Why Meditate",
      description: "A few calm minutes can ease stress and clear your mind",
      timeRange: "3-6 mins",
      image: Meditate,
    },
    {
      name: "Take a moment.",
      description:
        "Like a campfire for your mind — quiet, warm, and grounding.",
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

  const cardData = [
    {
      backgroundColor: "#CCD8FF",
      label: "3-minute breathing session",
      title: "Managing Anxiety",
    },
    {
      backgroundColor: "#FFE0E5",
      label: "5 day detox",
      title: "Managing Anxiety",
    },
  ];

  const myDate = new Date();
  const [timeOfDay, setTimeOfDay] = useState("");

  const day = new Date();
  const time = day.getHours();

  const getTimeOfDay = () => {
    if (time >= 0 && time < 12) {
      setTimeOfDay("Morning");
    } else if (time >= 12 && time < 16) {
      setTimeOfDay("Afternoon");
    } else {
      setTimeOfDay("Evening");
    }
  };

  useEffect(() => {
    getTimeOfDay();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF9F6" }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View style={styles.container}>
          <Text style={{ fontFamily: "AveriaSerifLibre-Bold", fontSize: 32 }}>
            Good {timeOfDay}
          </Text>
          <Text style={{ fontSize: 12, color: "#333333" }}>
            {formatDate(myDate)}
          </Text>
        </View>
        <View style={{ height: screenHeight * 0.3 }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
              paddingHorizontal: 16,
            }}
          >
            {cardData.map((card, idx) => (
              <View
                key={idx}
                style={{
                  height: screenHeight * 0.16,
                  backgroundColor: card.backgroundColor,
                  width: screenWidth * 0.8,
                  marginRight: 16,
                  marginTop: 10,
                  borderRadius: 25,
                  flexDirection: "row",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                <View style={{ padding: 20, gap: 30 }}>
                  <View style={{ paddingLeft: 10 }}>
                    <Text
                      style={{ color: "#333333", fontSize: 12, opacity: 0.6 }}
                    >
                      You're working on
                    </Text>
                    <Text style={{ color: "#333333", fontSize: 16 }}>
                      {card.title}
                    </Text>
                  </View>
                  <View>
                    <Pressable
                      style={{
                        width: "100%",
                        padding: 12,
                        backgroundColor: "#FAF9F6",
                        borderRadius: 100,
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{ letterSpacing: -0.5, textAlign: "center" }}
                      >
                        {card.label}
                      </Text>
                    </Pressable>
                  </View>
                </View>
                <View>
                  <CardFace />
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={{ flex: 1, paddingBottom: 20, paddingHorizontal: 20 }}>
          {wellnessFocus.map((focus, idx) => (
            <View key={idx} style={styles.focus}>
              <View style={{ maxWidth: "50%", gap: 5, padding: 20 }}>
                <Text style={{ fontSize: 16, color: "#333333" }}>
                  {focus.name}
                </Text>
                <Text style={{ color: "#333333", fontSize: 12, opacity: 0.6 }}>
                  {focus.description}
                </Text>
                <Text style={{ color: "#333333", fontSize: 12, opacity: 0.6 }}>
                  {focus.timeRange}
                </Text>
              </View>
              <View>
                <focus.image />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: screenHeight * 0.1,
    alignItems: "center",
    paddingHorizontal: screenWidth * 0.1,
  },
  focus: {
    minHeight: 80,
    width: 350,
    backgroundColor: "white",
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
