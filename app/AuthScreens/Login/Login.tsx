import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import useAuthStore from "../../Store";
type RootStackParamList = {
  Register: undefined;
  Home: undefined;
  Register3: undefined;
  Login: undefined;
};

type AuthStore = {
  email: string;
  password: string;
  username: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
};

const Login = () => {
  const { email, password, setEmail, setPassword, username } =
    useAuthStore() as AuthStore;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const moveToNextPage = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://chatapp-backend-avmf.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();
      if (!data.ok) {
        setError(data.message);
      }
      const userId = data.user.id;

      if (res.ok) {
        console.log(userId);
        if (userId) {
          await AsyncStorage.setItem("userId", userId);
        }
        navigation.navigate("Home");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#FAF9F6",
        paddingVertical: 20,
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
              Sign into Your GlowInside account
            </Text>
          </View>
          <View style={{ gap: 20 }}>
            <View>
              <Text style={{ color: "#333", paddingLeft: 7 }}>
                Your email <Text style={{ color: "#003CFE" }}>*</Text>{" "}
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
              <Text style={{ color: "#121212", paddingLeft: 7 }}>
                Password <Text style={{ color: "#003CFE" }}>*</Text>{" "}
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

                <Pressable
                  style={styles.icon}
                  onPress={() => setShowPassword((prev) => !prev)}
                >
                  <Feather
                    name={showPassword ? "eye" : "eye-off"}
                    size={24}
                    color="#555"
                  />
                </Pressable>
              </View>
              {error ? (
                <Text style={{ color: "red", marginTop: 5 }}>{error}</Text>
              ) : null}
            </View>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 30 }}>
        <Pressable onPress={moveToNextPage}>
          <LinearGradient
            colors={["#007bff", "#003cfe"]} // gradient blue shades
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            {loading ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ActivityIndicator color="white" size="small" />
              </View>
            ) : (
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 16 }}
              >
                Sign In
              </Text>
            )}
          </LinearGradient>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#EAEAEA",
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    letterSpacing: -1,
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
    letterSpacing: -1,
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
