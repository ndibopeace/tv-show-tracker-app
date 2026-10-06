import { StatusBar } from "expo-status-bar";
// import Navbar from "@components/navbar.jsx";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function FiveScreen() {
  return (
    <View style={styles.container}>
      <Text>5th screen</Text>
      {/* <StatusBar style="auto" /> */}

      {/* <Navbar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
