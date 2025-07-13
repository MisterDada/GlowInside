import ExploreIcon from "@/assets/images/TabbarIcons/ExploreIcon.svg";
import HomeIcon from "@/assets/images/TabbarIcons/HomeIcon.svg";
import ProfileIcon from "@/assets/images/TabbarIcons/ProfileIcon.svg";
import { useTheme } from "@/Theme/ThemeContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Explore from "../(tabs)/Explore";
import Home from "../(tabs)/index";
import Profile from "../(tabs)/Profile";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const Theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 1,
          justifyContent: "center",
          paddingHorizontal: 50,
        },
        tabBarBackground: () =>
          Platform.OS === "ios" ? (
            <BlurView
              intensity={30}
              style={{
                ...StyleSheet.absoluteFillObject,
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            />
          ) : (
            <View style={{ flex: 1, backgroundColor: "#ffffff" }} />
          ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Theme.tabIcon : "#999",
                fontSize: 14,
              }}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? Theme.tabIcon : "#999"} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? Theme.tabIcon : "#999", fontSize: 14 }}
            >
              Explore
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <ExploreIcon color={focused ? Theme.tabIcon : "#999"} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? Theme.tabIcon : "#999", fontSize: 14 }}
            >
              Me
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <ProfileIcon color={focused ? Theme.tabIcon : "#999"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
