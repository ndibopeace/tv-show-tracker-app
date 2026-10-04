import {View, Text, StyleSheet} from 'react-native';



export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text>home</Text>
      <Text>search</Text>
      <Text>set</Text>
    </View>
  );
}













const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#9d9d9d',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    position: 'absolute',
    bottom: 15,
    // left: 15,
    // right: 15,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    height: '6.5%',
  }
});