import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from "react";
import { Tabs, Slot } from "expo-router";
import AntDesign from "@react-native-vector-icons/ant-design/static";
import EvilIcons from "@react-native-vector-icons/evil-icons/static";
import Ionicons from "@react-native-vector-icons/ionicons/static";
import FontAwesome from "@react-native-vector-icons/fontawesome/static";

const RootLayout = () => {
  return (
    <SafeAreaProvider pointerEvents="none">
      <React.Fragment>
        {/* <View> */}
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarLabelStyle: {
              fontSize: 16,
            },
            tabBarStyle: {
              // position: "absolute",
              // bottom: 0,
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
              headerShown: false,
              // title: "Search",
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

    </SafeAreaProvider>
    
  );
};

export default RootLayout;
