import { useTheme } from "@/Theme/ThemeContext";
import axios from "axios";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

type Quote = {
  id: number;
  quote: string;
  author: string;
};

const QuotesTile = () => {
  const Theme = useTheme();
  const router = useRouter();
  const [quotes, setQuotes] = useState<Quote[]>([]);

  async function fetchQuotes() {
    try {
      const response = await axios.get("https://dummyjson.com/quotes");
      setQuotes(response.data.quotes);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  }

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <View>
      <Pressable
        onPress={() => {
          router.push("/quotes");
        }}
      >
        <View style={styles.container}>
          {quotes[0] ? (
            <View style={styles.quotesBox}>
              <Text style={{ color: "#FF6B81" }}>Daily Spark</Text>
              <Text style={[styles.quoteText, { color: Theme.text }]}>
                {quotes[0]?.quote}
              </Text>
              <Text style={styles.quoteAuthor}>{quotes[0]?.author}</Text>
            </View>
          ) : (
            <View style={styles.quotesBox}>
              <Text style={{ color: "#FF6B81" }}>Daily Spark</Text>
              <Text style={[styles.quoteText, { color: Theme.text }]}>
                No quotes available
              </Text>
            </View>
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default QuotesTile;

const styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.25,
    width: "100%",
    backgroundColor: "#ff6b811e",
    borderRadius: 30,
    padding: 20,
    marginBottom: 38,
  },
  quoteText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  quoteAuthor: {
    textAlign: "center",
    fontSize: 18,
    color: "#464646",
  },
  quotesBox: {
    justifyContent: "center",
    gap: 40,
    height: "100%",
  },
});
