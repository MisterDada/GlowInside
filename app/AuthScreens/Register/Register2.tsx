import { useTheme } from "@/Theme/ThemeContext";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
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
  Register3: undefined;
  Login: undefined;
};

type AuthStore = {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
};

const Register2 = () => {
  const { email, password, setEmail, setPassword } =
    useAuthStore() as AuthStore;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [required, setRequired] = useState("*");
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const moveToNextPage = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://chatapp-backend-avmf.onrender.com/api/auth/register-step1",
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
      const userId = data.userId;

      if (res.ok) {
        console.log(userId);
        if (userId) {
          await AsyncStorage.setItem("userId", userId);
        }
        navigation.navigate("Register3");
      }
    } catch (error) {
      console.log(error);
      console.error("Registration error:", error);
      setEmail("");
      setPassword("");
    } finally {
      setLoading(false);
    }
  };

  const loadErrors = useEffect(() => {
    checkRegistration();
  }, [email, password]);

  const checkRegistration = () => {
    if (!email || !password) {
      setRequired("*");
      return;
    } else {
      setRequired("");
    }
  };

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const Theme = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: Theme.background,
      }}
    >
      <View
        style={{ paddingHorizontal: 30, gap: height * 0.1, paddingTop: 40 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../assets/images/BackArrow.png")}
              tintColor={Theme.text}
            />
          </Pressable>

          <Image
            source={require("../../../assets/images/CloudIcon.png")}
            tintColor={Theme.text}
          />
        </View>
        <View style={{ gap: 48 }}>
          <View style={{ gap: 16 }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: Theme.text }}
            >
              Create Your GlowInside account
            </Text>
            <Text
              style={{ fontSize: 16, color: Theme.text, letterSpacing: -1 }}
            >
              Personalized wellness tracking, habit building, and gentle
              guidance to help you{" "}
              <Text style={{ color: "#FF8092" }}>
                glow from the inside out.
              </Text>
            </Text>
          </View>
          <View style={{ gap: 20 }}>
            <View>
              <Text style={{ color: Theme.text, paddingLeft: 7 }}>
                Your email <Text style={{ color: "#003CFE" }}>{required}</Text>{" "}
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
              <Text style={{ color: Theme.text, paddingLeft: 7 }}>
                Password <Text style={{ color: "#003CFE" }}>{required}</Text>{" "}
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
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
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
                style={{ textAlign: "center", color: Theme.text, fontSize: 16 }}
              >
                Continue
              </Text>
            )}
          </LinearGradient>
        </Pressable>
        <Text style={{ textAlign: "center", color: Theme.text, marginTop: 10 }}>
          Already have a Glow account?{" "}
          <Text
            onPress={() => navigation.navigate("Login")}
            style={{ color: "hsl(226, 100.00%, 49.80%)" }}
          >
            Login
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
