import { View, Text, StyleSheet } from "react-native";
// import  from "react-native";
// import { AppText } from "@/components/AppText";

export default function SecondScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <Text style={styles.size} >Search Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  size: {
    fontSize: 55,
  },
});
