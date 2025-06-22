import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";

type RootStackParamList = {
  Login: undefined;
  // add other screens here if needed
};

const Register = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const moveAnim = useRef(new Animated.Value(100)).current;
  const showAnim = useRef(new Animated.Value(0)).current;

  const [name, setName] = useState("");

  const animateBox = () => {
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true, 
    }).start();
  };

  const showLogo = () =>{
    Animated.timing(showAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true, 
    }).start();
  }

  useEffect(() => {
    animateBox();
    showLogo();
  }, []);

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
      <View>
        <Animated.Image
          source={require("../../assets/images/Logo.png")}
          style={[{
            width: 63,
            height: 54,
            marginTop: 20,
            marginBottom: 10,
            alignSelf: "center",
          }, {opacity: showAnim}]}
          resizeMode="contain"
        />
        <Animated.Image
          source={require("../../assets/images/Register-image.png")}
          style={[
            { width: Dimensions.get("window").width - 100, height: 300 },
            { transform: [{ translateY: moveAnim }] },
            { opacity: showAnim}
          ]}
          resizeMode="cover"
        />
      </View>
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/images/GoogleIcon.png")}
              style={{ width: 20, height: 20, marginRight: 10 }}
              resizeMode="contain"
            />
            <Text style={styles.socialText}>Sign up with Google</Text>
          </View>
        </Pressable>
        <Pressable style={styles.social}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/images/AppleLogo.png")}
              style={{ width: 20, height: 20, marginRight: 10 }}
              resizeMode="contain"
            />
            <Text style={styles.socialText}>Sign up with Apple</Text>
          </View>
        </Pressable>
        <Pressable style={styles.social}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/images/FacebookLogo.png")}
              style={{ width: 20, height: 20, marginRight: 10 }}
              resizeMode="contain"
            />
            <Text style={styles.socialText}>Sign up with Facebook</Text>
          </View>
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
          <Text style={{ textAlign: "center", color: "white" }}>
            Sign up with Email
          </Text>
        </Pressable>
        <Text style={{ textAlign: "center", color: "#BBBBB9", marginTop: 10 }}>
          Already have a Glow account?{" "}
          <Text
            onPress={() => navigation.navigate("Login")}
            style={{ color: "#003CFE", fontWeight: "bold" }}
          >
            Log in
          </Text>{" "}
          {/* Do not use this yet */}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;

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
