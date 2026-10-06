import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs, Slot } from "expo-router";

const Layout = () => {
  return (
    <React.Fragment>
      <Stack screenOptions={{ animation: "none" }}>
        <Stack.Screen
          name="index"
          options={{
            title: "Settings",
          }}
        />
      </Stack>
    </React.Fragment>
  );
};

export default Layout;
