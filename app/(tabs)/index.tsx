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
import { useTheme } from "../../Theme/ThemeContext";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
// const fontSize = Dimensions.get("screen").fontScale;

// const formatDate = (date: Date) => {
//   const days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const dayName = days[date.getDay()];
//   const monthName = months[date.getMonth()];
//   const dayOfMonth = date.getDate();

//   const ordinalSuffix = (n: number) => {
//     if (n >= 11 && n <= 13) return n + "th";
//     switch (n % 10) {
//       case 1:
//         return n + "st";
//       case 2:
//         return n + "nd";
//       case 3:
//         return n + "rd";
//       default:
//         return n + "th";
//     }
//   };

//   return `${dayName}, ${monthName} ${ordinalSuffix(dayOfMonth)}`;
// };

const date = new Date();
const formatDate = date.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

export default function Index() {
  const wellnessFocus = [
    {
      name: "Why Meditate?",
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
      head: "You're working on",
      headColor: "#A6B6F2",
      backgroundColor: "#CCD8FF",
      buttonColor: "#BCC8F5",
      label: "3-minute breathing session",
      title: "Managing Anxiety",
      borderColor: "#B2C5FF",
    },
    {
      head: "You're working on",
      headColor: "#FFB2BF",
      backgroundColor: "#FFE0E5",
      buttonColor: "#FFB2BF",
      label: "5 day detox",
      title: "Managing Anxiety",
      borderColor: "#FFCCD4",
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

  const Theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.background }}>
      <StatusBar barStyle="default" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 55 }}
      >
        <View style={styles.container}>
          <Text
            style={{
              fontFamily: "AveriaSerifLibre-Bold",
              fontSize: 32,
              color: Theme.text,
            }}
          >
            Good {timeOfDay}
          </Text>
          <Text style={{ fontSize: 12, color: Theme.text }}>{formatDate}</Text>
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
                  backgroundColor: card.backgroundColor,
                  width: screenWidth * 0.8,
                  marginRight: 16,
                  marginTop: 10,
                  borderRadius: 25,
                  flexDirection: "row",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  overflow: "hidden",
                  borderWidth: 2,
                  borderColor: card.borderColor,
                }}
              >
                <View style={{ padding: 20, gap: 30 }}>
                  <View style={{ paddingLeft: 10, gap: 5 }}>
                    <Text
                      style={{
                        color: card.headColor,
                        fontSize: 12,
                      }}
                    >
                      {card.head}
                    </Text>
                    <Text style={{ color: "#333333", fontSize: 18 }}>
                      {card.title}
                    </Text>
                  </View>
                  <View>
                    <Pressable
                      style={{
                        width: "100%",
                        padding: 12,
                        backgroundColor: card.buttonColor,
                        borderRadius: 100,
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          letterSpacing: -0.5,
                          textAlign: "center",
                          color: "white",
                        }}
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
        <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "AveriaSerifLibre-Bold",
              color: Theme.text,
            }}
          >
            Your current wellness focus
          </Text>
        </View>
        <View style={{ flex: 1, paddingBottom: 20, paddingHorizontal: 20 }}>
          {wellnessFocus.map((focus, idx) => (
            <View
              key={idx}
              style={[styles.focus, { backgroundColor: Theme.card }]}
            >
              <View style={{ maxWidth: "50%", gap: 5, padding: 20 }}>
                <Text style={{ fontSize: 16, color: Theme.text }}>
                  {focus.name}
                </Text>
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
