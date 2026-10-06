import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Dropped() {
  return (
    <View style={styles.container}>
      <Text style={StyleSheet.create({ fontSize: 40 })}>
        dropped
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: "90%",
    marginInline: "auto",
  },
});
