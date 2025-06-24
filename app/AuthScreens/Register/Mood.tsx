import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import useAuthStore from "../../Store";

type AuthStore = {
  username: string;
};

const Login = () => {
  const { username } = useAuthStore() as AuthStore;

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
