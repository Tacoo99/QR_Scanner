import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { colors, images } from "../constants";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Zeskanuj kod QR");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Typ: " + type + "\nDane: " + data);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          Oczekiwanie na dostęp do kamery
        </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        ></View>
        <Image
          source={images.camera}
          resizeMode="contain"
          style={{
            top: 15,
            width: 150,
            height: 150,
          }}
        />
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Brak dostępu do kamery</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          bottom: 110,
          alignItems: "center",
        }}
      >
        <Image
          source={images.qr_code}
          resizeMode="contain"
          style={{
            width: 100,
            height: 100,
          }}
        />
        <Text
          style={{
            fontSize: 25,
            top: 20,
          }}
        >
          Nakieruj aparat na kod QR
        </Text>
      </View>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && (
        <Button
          title={"Skanuj ponownie"}
          onPress={() => setScanned(false)}
          color={colors.primary}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: colors.primary,
  },
});
