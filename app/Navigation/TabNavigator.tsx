import ExploreIcon from "@/assets/images/TabbarIcons/ExploreIcon.svg";
import HomeIcon from "@/assets/images/TabbarIcons/HomeIcon.svg";
import ProfileIcon from "@/assets/images/TabbarIcons/ProfileIcon.svg";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Explore from "../(tabs)/Explore";
import Home from "../(tabs)/index";
import Profile from "../(tabs)/Profile";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
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
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 1,
          justifyContent: "center",
          paddingHorizontal: 50,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? "#003CFE" : "#999"} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ focused }) => (
            <ExploreIcon color={focused ? "#003CFE" : "#999"} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Me",
          tabBarIcon: ({ focused }) => (
            <ProfileIcon color={focused ? "#003CFE" : "#999"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
