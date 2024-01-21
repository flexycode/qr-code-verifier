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
              source={require("@/assets/images/profilePictures/profile2.jpg")}
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

        <View style={styles.userInfoContainer}>
          <Text style={styles.header}>Name</Text>
          <Text style={[styles.paragraph, { marginBottom: 10 }]}>
            Isaiah Hampton
          </Text>
          <Text style={styles.header}>ID</Text>
          <Text style={[styles.paragraph, { marginBottom: 10 }]}>
            192-2837-9123-010
          </Text>
          <Text style={styles.header}>Address</Text>
          <Text style={[styles.paragraph, { marginBottom: 10 }]}>
            81221 Betsey Bridge, Taylorton, ID 29578-0732
          </Text>
          <Text style={styles.header}>Email</Text>
          <Text style={[styles.paragraph, { marginBottom: 10 }]}>
            isaiahhampton@example.com
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
