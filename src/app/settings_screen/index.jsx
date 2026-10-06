import { StatusBar } from "expo-status-bar";
// import Navbar from "@components/navbar.jsx";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function FouthScreen() {
  return (
    <View style={styles.container}>
      <Text style={StyleSheet.create({ fontSize: 55 })}>Settings Screen</Text>
      <Link href="/settings_screen/five" style={{ fontSize: 20, color: "blue" }}> push to 5th </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
