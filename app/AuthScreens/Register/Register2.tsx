import { Feather } from "@expo/vector-icons";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type RootStackParamList = {
  Register: undefined;
  Login: undefined;
};

const Register2 = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const inputRef = useRef<TextInput>(null);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#FAF9F6",
      }}
    >
      <View style={{ paddingHorizontal: 30, gap: 80, paddingTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={require("../../../assets/images/BackArrow.png")} />
          </Pressable>

          <Image source={require("../../../assets/images/CloudIcon.png")} />
        </View>
        <View style={{ gap: 48 }}>
          <View style={{ gap: 16 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Create Your GlowInside account
            </Text>
            <Text style={{ fontSize: 16, opacity: 0.5 }}>
              Personalized wellness tracking, habit building, and gentle
              guidance to help you glow from the inside out.
            </Text>
          </View>
          <View style={{ gap: 20 }}>
            <View>
              <Text style={{ fontSize: 19, color: "#121212" }}>
                Your email{" "}
                <Text style={{ color: "#003CFE", fontSize: 19 }}>*</Text>{" "}
              </Text>
              <TextInput
                style={styles.input}
                placeholder="BukayoSaka@gmail.com"
                placeholderTextColor="gray"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View>
              <Text style={{ fontSize: 19, color: "#121212" }}>
                Password{" "}
                <Text style={{ color: "#003CFE", fontSize: 19 }}>*</Text>{" "}
              </Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  ref={inputRef}
                  style={styles.inputWithIcon}
                  placeholder="Password (8+ characters)"
                  placeholderTextColor="gray"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <Pressable style={styles.icon} onPress={() => setShowPassword((prev) => !prev)}>
                  <Feather
                    name={showPassword ? "eye" : "eye-off"}
                    size={24}
                    color="#555"
                  />
                </Pressable>
              </View>
            </View>
          </View>
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

export default Register2;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#EAEAEA",
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 5,
    marginTop: 10,
  },
  inputWithIcon: {
    flex: 1,
    padding: 20,
    paddingRight: 40, // space for the icon
  },
  button: {
    backgroundColor: "#003CFE",
    padding: 10,
    marginVertical: 10,
    borderRadius: 100,
    justifyContent: "center",
    width: "100%",
    height: 47,
  },
  icon: {
    position: "absolute",
    right: 15,
    zIndex: 1,
  },
});
