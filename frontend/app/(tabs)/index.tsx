import { StyleSheet, View, Text } from "react-native";
import { Stack } from "expo-router";

import styles from "@/constants/constants";

export default function TabOneScreen() {
  return (
    <View>
      <Stack.Screen options={{ headerTitle: "" }}></Stack.Screen>
      <Text style={styles.title}>Tab One</Text>
    </View>
  );
}
