import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function CurrentlyWatching() {
    
  return (
    <View style={styles.container}>
      <Text>Currently Watching </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "transparent",
    // alignItems: "center",
    // justifyContent: "center",
    // borderWidth: 1,
    // width: "90%",
    // marginInline: "auto",
  },
});
