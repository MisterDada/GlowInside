import { useEffect, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

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
  const myDate = new Date();
  const [timeOfDay, setTimeOfDay] = useState("");

  const day = new Date();
  const time = day.getHours();

  const getTimeOfDay = () => {
    if (time >= 0 && time < 12) {
      setTimeOfDay("Morning");
    } else if (time >= 12 && time <= 16) {
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
      <View style={styles.container}>
        <Text style={{ fontFamily: "AveriaSerifLibre-Bold", fontSize: 32 }}>
          Good {timeOfDay}
        </Text>
        <Text style={{ fontSize: 12, color: "#333333" }}>
          {formatDate(myDate)}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: screenHeight * 0.1,
    alignItems: "center",
  },
});
