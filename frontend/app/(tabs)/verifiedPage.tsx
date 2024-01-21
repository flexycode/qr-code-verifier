import {
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { Stack } from "expo-router";
import { styles, COLORS } from "@/constants/constants";

export default function verifiedPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
            <Image
              style={styles.verifiedImage}
              source={require("@/assets/images/verified.png")}
            ></Image>
            <Text style={{ textAlign: "center", fontSize: 17 }}>
              Verified User
            </Text>
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}
