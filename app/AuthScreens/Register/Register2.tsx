import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";
import React from "react";
import {
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

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ paddingHorizontal: 30 }}>
        <View>
          <Text style={{ fontSize: 40 }} onPress={() => navigation.goBack()}>
            Go back
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 20 }}>Create Your GlowInside account</Text>
          <Text style={{ fontSize: 16, color: "gray" }}>
            Personalized wellness tracking, habit building, and gentle guidance
            to help you glow from the inside out.
          </Text>
        </View>
        <View style={{ gap: 20 }}>
          <View>
            <Text>Your email</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "gray",
                padding: 10,
                borderRadius: 5,
                marginTop: 10,
              }}
              placeholder="BukayoSaka@gmail.com"
              placeholderTextColor="gray"
            ></TextInput>
          </View>
          <View>
            <Text>Password</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "gray",
                padding: 10,
                borderRadius: 5,
                marginTop: 10,
              }}
              placeholder="Password (8+ characters)"
              placeholderTextColor="gray"
            ></TextInput>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 30 }}>
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
          <Text style={{ textAlign: "center", color: "white" }}>Register</Text>
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

const styles = StyleSheet.create({});
