import React, { useState } from "react";
import { colors, images } from "../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import QRCode from "react-native-qrcode-svg";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [qrvalue, setQrvalue] = useState("");

  return (
    <KeyboardAwareScrollView
      style={{
        backgroundColor: colors.white,
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={images.qr_code}
              resizeMode="contain"
              style={styles.imageStyle}
            />
            <Text style={styles.titleStyle}>Generowanie kodu QR</Text>
          </View>
          <QRCode
            //QR code value
            value={qrvalue ? qrvalue : "NA"}
            size={250}
            color={colors.black}
          />
          <Text style={styles.textStyle}>
            Podaj wartość która ma zostać zamieniona na kod QR
          </Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(inputText) => setInputText(inputText)}
            placeholder="Podaj jakąś wartość"
            value={inputText}
          />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setQrvalue(inputText)}
          >
            <Text style={styles.buttonTextStyle}>Generuj kod QR</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    marginBottom: 50,
  },
  imageStyle: {
    width: 150,
    height: 100,
  },
  titleStyle: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
    marginTop: 35,
  },
  textStyle: {
    textAlign: "center",
    margin: 10,
  },
  textInputStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    margin: 10,
    color: colors.black,
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#51D8C7",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
});
