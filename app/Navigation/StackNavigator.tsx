import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../AuthScreens/Login";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const StackNavigator = () => {
    const AuthStackNavigator = () => {
        return (
            <AuthStack.Navigator screenOptions={{
                headerShown: false, gestureEnabled: false
            }} >
                <AuthStack.Screen name="Login" component={Login}/>
            </AuthStack.Navigator>
        );
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={AuthStackNavigator} />
            <Stack.Screen name="Home" component={TabNavigator} />
        </Stack.Navigator>
    );
    
}

export default StackNavigator