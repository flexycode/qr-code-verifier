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
      <View style={styles.profileAndStatusContainer}>
        <View style={styles.profilePictureContainer}>
          <Image
            style={styles.profilePicture}
            source={require("@/assets/images/profilePictures/profile1.jpg")}
          ></Image>
        </View>
        <View style={styles.verifiedStatusContainer}>
          <Text> status</Text>
        </View>
      </View>

      <Text></Text>
    </SafeAreaView>
  );
}
