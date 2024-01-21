import { styles } from "@/constants/constants";

import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import { Camera } from "expo-camera";

export default function Home() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    setScanned(true);
    alert("" + type + " " + data);
    router.navigate(require("@/app/(tabs)/verifiedPage"));
  };

  const renderCamera = () => {
    return (
      <View style={styles.cameraContainer}>
        <Camera
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          ratio="1:1"
          style={styles.camera}
        />
      </View>
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Camera permission not granted</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Sante Qr Verification",
          headerStyle: { backgroundColor: "#e5fae3" },
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      ></Stack.Screen>
      {renderCamera()}
      <Text style={styles.paragraph}>
        Align your camera to the Qr Code to start scanning
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setScanned(false);
          router.navigate("/(tabs)/verifiedPage");
        }}
      >
        <Text style={styles.buttonText}>Scan QR</Text>
      </TouchableOpacity>
      <View>
        <Link href="/(tabs)/verifiedPage">verify</Link>
      </View>
    </SafeAreaView>
  );
}
