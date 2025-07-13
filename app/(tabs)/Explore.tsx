import { useTheme } from "@/Theme/ThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type RootStackParamList = {
  Register: undefined;
};

const Explore = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const Logout = async () => {
    try {
      await AsyncStorage.removeItem("userId");
      navigation.navigate("Register");
    } catch (error: any) {
      Alert.alert(error);
    }
  };

  const Theme = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.background }}>
      <View>
        <Text style={{ color: Theme.text }}>Explore</Text>
        <Button title="Logout" onPress={Logout} />
      </View>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
