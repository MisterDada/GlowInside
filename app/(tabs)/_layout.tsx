import ExploreIcon from "../../assets/images/TabbarIcons/ExploreIcon.svg";
import HomeIcon from "../../assets/images/TabbarIcons/HomeIcon.svg";
import ProfileIcon from "../../assets/images/TabbarIcons/ProfileIcon.svg";
import { useTheme } from "../../Theme/ThemeContext";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function TabsLayout() {
  const Theme = useTheme();

  return (
    <Tabs
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
      <Tabs.Screen
        name="index"
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
      <Tabs.Screen
        name="explore"
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
      <Tabs.Screen
        name="profile"
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
    </Tabs>
  );
}
