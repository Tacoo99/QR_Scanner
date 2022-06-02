import React, { useState } from "react";
import { colors, images } from "../constants";

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";

import QRCode from "react-native-qrcode-svg";

function addItem(username, text){
  if(username != "Anonim"){

    var InsertAPIURL = "http://192.168.0.87/AM_LOGIN/addGenerated.php";
  
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
  
      var Data = {
        Username: username,
        Text: text,
      };
  
      fetch(InsertAPIURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data), //convert data to JSON
      })
        .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
        .then((response) => {
          alert(response[0].Message); // If data is in JSON => Display alert msg
        })
        .catch((error) => {
          alert("[BŁĄD]" + error);
        });
}
else{
  Alert.alert('Zaloguj się aby zapisać swoje generowane treści!')
}
};

export function useKeyboardHeight() {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', e => setKeyboardHeight(e.endCoordinates.height));
    const hideSubscription = Keyboard.addListener('keyboardWillHide', () => setKeyboardHeight(0));
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    }
  }, [setKeyboardHeight]);

  return keyboardHeight;
}


const App = ({route}) => {
  const [inputText, setInputText] = useState("");
  const [qrvalue, setQrvalue] = useState("");

    let username = route.params.login;

  return (
    <KeyboardAvoidingView
      style={{
        backgroundColor: colors.white,
        flex:1,
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
            onPress={() => {
              setQrvalue(inputText), addItem(username,inputText)
            }
            }
          >
            <Text style={styles.buttonTextStyle}>Generuj kod QR</Text>
          </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    marginBottom: 30,
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
    marginTop: 10,
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
    marginTop: 10,
    padding: 7,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
});
