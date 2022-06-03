import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Image, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { colors, images, API } from "../constants";

function addItem(username, text){
  if(username != "Anonim"){
      let api = API.addScanned;
  
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
  
      var Data = {
        Username: username,
        Text: text,
      };
  
      fetch(api, {
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
  Alert.alert('Zaloguj się aby zapisać swoje skany!')
}
};


export default function Scanner( {route} ) {
  
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Zeskanuj kod QR");
  
  let username = route.params.login;

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
    addItem(username,data);
    
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
          title={"Dostęp do kamery"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{
        bottom: 140,
        flexDirection: 'row',
        
      }}>
        
      <Text style ={{
        fontSize: 24
      }}>
       Witaj 
        </Text>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 24,
          marginLeft: 5
        }}
        >
          {route.params.login}
        </Text>
      </View>

      <View
        style={{
          bottom: 110,
          alignItems: "center",
          flexDirection: 'row'
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
            left: 15,
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
    bottom: 70,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    bottom: 70,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: colors.primary,
  },
});
