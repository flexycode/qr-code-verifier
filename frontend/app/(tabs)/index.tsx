import { StyleSheet, View, Text } from "react-native";
import { Stack } from "expo-router";

export default function TabOneScreen() {
  return (
    <View>
      <Stack.Screen options={{ headerTitle: "" }}></Stack.Screen>
      <Text style={styles.title}>Tab One</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
