import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import Login from "../AuthScreens/Login/Login";
import Mood from "../AuthScreens/Register/Mood";
import Register from "../AuthScreens/Register/Register";
import Register2 from "../AuthScreens/Register/Register2";
import Register3 from "../AuthScreens/Register/Register3";
import Tailor from "../AuthScreens/Register/Tailor";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

const StackNavigator = () => {
  const AuthStackNavigator = () => {
    return (
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
        initialRouteName="Register"
      >
        <AuthStack.Screen name="Mood" component={Mood} />
        <AuthStack.Screen name="Register" component={Register} />
        <AuthStack.Screen name="Register2" component={Register2} />
        <AuthStack.Screen name="Register3" component={Register3} />
        <AuthStack.Screen name="Tailor" component={Tailor} />
        <AuthStack.Screen name="Login" component={Login} />
      </AuthStack.Navigator>
    );
  };

  const InsideStackNavigator = () => {
    return (
      <InsideStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <InsideStack.Screen name="Home" component={TabNavigator} />
      </InsideStack.Navigator>
    );
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUser = async () => {
    const user = await AsyncStorage.getItem("userId");
    if (user) {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      {isLoggedIn ? (
        <Stack.Screen name="Home" component={InsideStackNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStackNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
