import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import {Stack, useRouter} from "expo-router"
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const renderCamera = () => {
    return (
      <View style={styles.cameraContainer}>
        <Camera
          barCodeScannerSettings={{barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr]}}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          ratio='1:1'

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
        <Text style={styles.text}>Camera permission not granted</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sante Qr verification</Text>
      {renderCamera()}
      <Text style={styles.paragraph}>Align your camera to the Qr Code to start scanning</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setScanned(false)}
      >
        <Text style={styles.buttonText}>Scan QR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5fae3",
    flex: 1,
    alignItems: 'center',
  },
  title: {
    position: "relative",
    top: "100px",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 100,
    marginTop: 80
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 40,
  },
  cameraContainer: {
    width: '80%',
    aspectRatio: 1/1,
    overflow: 'hidden',
    borderRadius: 40,
    marginBottom: 40,
  },
  camera: {
    flex: 1,
  },
  button: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    height:50,
    width: 150,
    alignContent: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center"
  },
});