import React from "react";
import {
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";

const Login = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAF9F6",
      }}
    >
      <StatusBar barStyle="dark-content" />
      <View
        style={{ alignItems: "center", justifyContent: "center", width: "80%" }}
      >
        <Text style={{ fontSize: 32, fontWeight: "bold", textAlign: "center" }}>
          Ready to put yourself first?
        </Text>
        <Text style={{ textAlign: "center", color: "#BBBBB9" }}>
          Create your account and start prioritizing your mental healthh in a
          way that works fo you
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20, width: "100%" }}>
        <Pressable style={styles.social}>
          <Text style={styles.socialText}>Sign up with Google</Text>
        </Pressable>
        <Pressable style={styles.social}>
          <Text style={styles.socialText}>Sign up with Apple</Text>
        </Pressable>
        <Pressable style={styles.social}>
          <Text style={styles.socialText}>Sign up with Facebook</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#003CFE",
            padding: 10,
            marginVertical: 10,
            borderRadius: 100,
            justifyContent: "center",
            width: "100%",
            height: 47,
            
          }}
        >
        <Text style={{textAlign: 'center', color: 'white'}}>Sign up with Email</Text>
        </Pressable>
        <Text style={{ textAlign: 'center', color: "#BBBBB9", marginTop: 10 }}>
            Already have a Glow account?{" "}
            <Text style={{ color: "#003CFE", fontWeight: "bold" }}>
                Log in
            </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  social: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    borderRadius: 100,
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    height: 47,
  },
  socialText: {
    color: "black",
    textAlign: "center",
  },
});
