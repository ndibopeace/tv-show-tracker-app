import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import { Host, useNativeState, Row, Button } from "@expo/ui";
import { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ControlledTextInputExample() {
  const text = useNativeState("");

  const handleChangeText = useCallback(
    (value) => {
      "worklet";
      text.value = value === "Hello" ? "World" : value;
      console.log(value);
    },
    [text],
  );

  return (
    <SafeAreaView>
      <View
        // alignment="center"
        style={{
          backgroundColor: "red",
          width: 200,
          borderRadius: 25,
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <TextInput
          textStyle={{ fontSize: 20 }}
          // style={{width: 200}}
          textAlign="center"
          value={text}
          placeholder="Type here"
          onChangeText={handleChangeText}
        />
        <Pressable onPress={()=>console.log('pressed')}>
          <Text>Search</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Host
//         // matchContents
//         style={{
//           flex: 1,
//         }}
//       >
//         <View
//           alignment="center"
//           style={{
//             backgroundColor: "red",

//             // width: 200,
//           }}
//         >
//           <TextInput
//             textStyle={{ fontSize: 20 }}
//             // style={{width: 200}}
//             textAlign="center"
//             value={text}
//             placeholder="Type here"
//             onChangeText={handleChangeText}
//           />
//           <Button label="search" />
//         </View>
//       </Host>
//     </SafeAreaView>
//   );
// }
