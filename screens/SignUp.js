import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { images, colors, sizes, API } from "../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "react-native-gesture-handler";
import PassMeter from "react-native-passmeter";
import { LogBox } from 'react-native';


LogBox.ignoreAllLogs();//Ignore all log notifications

const MAX_LEN = 15,
  MIN_LEN = 8,
  PASS_LABELS = ["Za krótkie", "Słabe", "Normalne", "Mocne", "Bezpieczne"];

const SignIn = ({ navigation }) => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function insertRecord(email, password) {
    let api = API.signup;

    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    var Data = {
      Email: email,
      Password: password,
    };

    fetch(api, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data), //convert data to JSON
    })
      .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
      .then((response) => {
        alert(response[0].Message); // If data is in JSON => Display alert msg
        navigation.navigate("SignIn");
      })
      .catch((error) => {
        alert("[BŁĄD]" + error);
      });
  }

  function checkPassword(password){
    if(password.length < 8){
      Alert.alert("Hasło musi zawierać conajmniej 8 znaków!")
    }
    else{
      insertRecord(email,password)
    }
  
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#258CE3",
        top: 30,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Image
            source={images.qr_code}
            resizeMode="contain"
            style={{
              top: 15,
              width: 350,
              height: 150,
            }}
          />
        </View>

        <View
          style={{
            marginTop: 70,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 40,
              color: colors.white,
            }}
          >
            Zarejestruj się
          </Text>

          <Text
            style={{
              textAlign: "center",
              color: colors.white,
              marginTop: 20,
              fontSize: 18,
              marginBottom: 50,
            }}
          >
            Uzupełnij proszę poniższe dane
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            height: 55,
            paddingHorizontal: 10,
            justifyContent: "center",
            marginTop: 8,
            borderRadius: 30,
            backgroundColor: colors.lightGray2,
          }}
        >
          <TextInput
            style={{
              fontSize: 19,
              width: sizes.width / 2,
              textAlign: "center",
            }}
            placeholder="Nazwa użytkownika"
            placeholderTextColor={colors.gray}
            keyboardType="email-address"
            autoCompleteType="email"
            onChangeText={(newText) => setEmail(newText)}
            defaultValue={email}
          ></TextInput>
        </View>

        <View
          style={{
            flexDirection: "row",
            height: 55,
            paddingHorizontal: 10,
            justifyContent: "center",
            marginTop: 40,
            borderRadius: 40,
            backgroundColor: colors.lightGray2,
          }}
        >
          <TextInput
            style={{
              fontSize: 19,
              width: sizes.width / 2,
              textAlign: "center",
            }}
            placeholder="Hasło"
            placeholderTextColor={colors.gray}
            keyboardType="default"
            autoCompleteType="password"
            secureTextEntry={true}
            onChangeText={(newText) => setPassword(newText)}
            defaultValue={password}
          ></TextInput>
        </View>

        <View style={{
          marginTop: 15
        }}>

        <PassMeter
        showLabels
        password={password}
        maxLength={MAX_LEN}
        minLength={MIN_LEN}
        labels={PASS_LABELS}
      />
      </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.white,
              borderRadius: 40,
              width: sizes.width / 2,
              height: 50,
              top: 40,
            }}
            onPress={() => checkPassword(password)}
          >
            <Text
              style={{
                color: colors.primary,
                fontSize: 20,
              }}
            >
              Załóż konto
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.white,
              borderRadius: 40,
              width: sizes.width / 2,
              height: 50,
              top: 70,
            }}
            onPress={() => navigation.replace("Welcome")}
          >
            <Text
              style={{
                color: colors.primary,
                fontSize: 20,
              }}
            >
              Powrót
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              top: 80,
            }}
          >
            <Text
              style={{
                color: colors.white,
              }}
            >
              Masz już konto?
            </Text>
            <TouchableOpacity
              style={{
                color: colors.white,
                left: 3,
              }}
              onPress={() => navigation.replace("SignIn")}
            >
              <Text
                style={{
                  color: colors.white,
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
              >
                Zaloguj się
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignIn;
