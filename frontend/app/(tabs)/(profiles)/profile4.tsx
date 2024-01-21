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
              source={require("@/assets/images/profilePictures/emptyProfile.png")}
            ></Image>
          </View>
          <View style={styles.verifiedStatusContainer}>
            <Image
              style={styles.verifiedImage}
              source={require("@/assets/images/notVerified.png")}
            ></Image>
            <Text style={{ textAlign: "center", fontSize: 17 }}>
              User Not Verified
            </Text>
          </View>
        </View>

        <View style={styles.userInfoContainer}>
          <Text style={styles.header}>Name</Text>
          <Text style={[styles.paragraph, { marginBottom: 10 }]}>unknown</Text>
          <Text style={styles.header}>ID</Text>
          <Text style={[styles.paragraph, { marginBottom: 10 }]}>unknown</Text>
          <Text style={styles.header}>Address</Text>
          <Text style={[styles.paragraph, { marginBottom: 10 }]}>unknown</Text>
          <Text style={styles.header}>Email</Text>
          <Text style={[styles.paragraph, { marginBottom: 10 }]}>unknown</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
