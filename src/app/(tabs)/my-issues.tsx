import { View, Text, StyleSheet } from "react-native";
export default function MyIssues() {
  return (
    <View style={styles.container}>
      <Text>My Issues Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });