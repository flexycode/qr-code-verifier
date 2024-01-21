import { SafeAreaView, View, Text, Image, Button } from "react-native";
import { Stack } from "expo-router";
import { styles, COLORS } from "@/constants/constants";

export default function verifiedPage() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "User info",
          headerStyle: { backgroundColor: COLORS.Primary },
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
      <View>
        <Text>Hello testing</Text>
      </View>
      <Text></Text>
    </SafeAreaView>
  );
}
