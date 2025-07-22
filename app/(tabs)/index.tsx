import axios from "axios";
import { useEffect, useState } from "react";
import {
  Dimensions,
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
const fontSize = Dimensions.get("screen").fontScale;

type Quote = {
  id: number;
  quote: string;
  author: string;
};

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

  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/quotes");
      setQuotes(response.data.quotes);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

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
              fontSize: 24,
              color: Theme.text,
            }}
          >
            Good {timeOfDay}
          </Text>
          <Text style={{ fontSize: 12, color: Theme.text }}>{formatDate}</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: screenHeight * 0.25,
              width: screenWidth * 0.9,
              backgroundColor: "#ff6b8132",
              borderRadius: 30,
              padding: 20,
              marginBottom: 38,
            }}
          >
            {quotes.length > 0 && (
              <View
                style={{ justifyContent: "center", gap: 40, height: "100%" }}
              >
                <Text style={{ color: "#FF6B81" }}>Daily Spark</Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 18,
                    color: Theme.text,
                  }}
                >
                  {quotes[0].quote}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    color: "#464646",
                  }}
                >
                  {quotes[0].author}
                </Text>
              </View>
            )}
          </View>
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
    alignItems: "flex-start",
    paddingHorizontal: screenWidth * 0.1,
    marginBottom: 38,
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
