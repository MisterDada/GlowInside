import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuthStore from "../Store";

// Define the type for your auth store
type AuthStore = {
  email: string;
  password: string;
  username: string;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
};

const Register3 = () => {
  const router = useRouter();

  const { email, password, username, setUsername } =
    useAuthStore() as AuthStore;

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  // Get userId from AsyncStorage when component mounts
  // useEffect(() => {
  //   const fetchUserId = async () => {
  //     const userId = await AsyncStorage.getItem("userId");
  //     console.log("Fetched userId:", userId);
  //     setUserId(userId);
  //   };
  //   fetchUserId();
  // }, []);

  const handleRegister = async () => {
    router.push("/auth/mood");
    // if (!userId) {
    //   setError("User ID not found. Please restart registration.");
    //   return;
    // }
    // setLoading(true);
    // setError("");
    // try {
    //   const res = await fetch(
    //     "https://chatapp-backend-avmf.onrender.com/api/auth/register-step2",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //       },
    //       body: JSON.stringify({
    //         userId,      // <-- include userId here
    //         username: username, // use the name entered by the user
    //         email,
    //         password,
    //       }),
    //     }
    //   );
    //   const raw = await res.text();
    //   const data = JSON.parse(raw);

    //   if (res.ok) {
    //     await AsyncStorage.setItem("userId", data.user?.id || userId);
    //     await AsyncStorage.setItem("token", data.token);
    //     await AsyncStorage.setItem("user", JSON.stringify(data.user));
    //     await AsyncStorage.setItem("isLoggedIn", JSON.stringify(true));
    //     router.push("/auth/mood");
    //     console.log("Registration successful", data);
    //   } else {
    //     setError(data.message || "Registration failed.");
    //     console.error(data);
    //   }
    // } catch (error) {
    //   setError("Something went wrong. Please try again.");
    //   console.error("Registration error:", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  {
    loading && (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, color: "#007bff" }}>Loading...</Text>
      </View>
    );
  }

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
          <Pressable onPress={() => router.back()}>
            <Image source={require("../../assets/images/BackArrow.png")} />
          </Pressable>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../assets/images/Meditating.png")} />
        </View>

        <View style={{ gap: 48 }}>
          <View style={{ gap: 16 }}>
            <Text
              style={{ textAlign: "center", color: "#BBBBB9", fontSize: 16 }}
            >
              {email}
            </Text>
            <Text
              style={{
                fontSize: 32,
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "AveriaSerifLibre-Bold",
              }}
            >
              What should we call you?
            </Text>
          </View>
          <View style={{ gap: 20 }}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Your name"
                placeholderTextColor="gray"
                value={username}
                onChangeText={setUsername}
              />
            </View>
          </View>
          {error ? (
            <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
          ) : null}
        </View>
      </View>
      <View style={{ paddingHorizontal: 30 }}>
        <Pressable onPress={handleRegister} disabled={loading}>
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

export default Register3;

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
