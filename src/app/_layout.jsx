import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tabs, Slot } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const RootLayout = () => {
  return (
    <React.Fragment>
      {/* <View> */}
      <Tabs
        screenOptions={{          
          tabBarShowLabel: false,
          tabBarLabelStyle: {
            fontSize: 16,
            // marginTop: -20,
            // color: "red",
            // borderWidth: 1,
            // borderColor: "red",
          },
          tabBarStyle: {
            // borderWidth: 1,
            // borderColor: "red",
            position: "absolute",
            bottom: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size, focused }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="search_screen"
          options={{
            title: "Search",
            tabBarIcon: ({ color, size, focused }) => (
              <EvilIcons name="search" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile_screen"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size, focused }) => (
              <FontAwesome name="spinner" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings_screen"
          options={{
            popToTopOnBlur: true,
            headerShown: false,
            title: "Settings",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
      {/* </View> */}
      {/* <Slot /> */}
    </React.Fragment>
  );
};

export default RootLayout;
