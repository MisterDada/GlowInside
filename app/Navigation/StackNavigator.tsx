import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../AuthScreens/Login/Login";
import Mood from "../AuthScreens/Register/Mood";
import Register from "../AuthScreens/Register/Register";
import Register2 from "../AuthScreens/Register/Register2";
import Register3 from "../AuthScreens/Register/Register3";
import Tailor from "../AuthScreens/Register/Tailor";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const StackNavigator = () => {
  const AuthStackNavigator = () => {
    return (
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
        initialRouteName="Tailor"
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

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen name="Auth" component={AuthStackNavigator} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
