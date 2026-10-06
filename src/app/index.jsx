import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import CurrentlyWatching from "@components/currently_watching";
import Completed from "@components/completed";
import Watchlist from "@components/watchlist";
import Dropped from "@components/dropped";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <CurrentlyWatching />
      {/* <Completed /> */}
      {/* <Watchlist /> */}
      {/* <Dropped /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "90%",
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
