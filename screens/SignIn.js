import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { images, colors, sizes, API } from "../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "react-native-gesture-handler";


const SignIn = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function checkRecord() {
    let api = API.login;
    
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
      body: JSON.stringify(Data),
    })
      .then((Response) => Response.json())
      .then((Response) => {
        alert(Response[0].Message);
        if (Response[0].Message == "Zalogowano pomyślnie") {
          navigation.replace("Scanner", {
            login: email,
          });
        }
        console.log(Data);
      })
      .catch((error) => {
        console.error("[BŁĄD]" + error);
      });
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
            Zaloguj
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
            Witaj z powrotem, brakowało nam Ciebie :)
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
            placeholder="Podaj e-mail"
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
            placeholder="Podaj hasło"
            placeholderTextColor={colors.gray}
            keyboardType="default"
            autoCompleteType="password"
            secureTextEntry={true}
            onChangeText={(newText) => setPassword(newText)}
            defaultValue={password}
          ></TextInput>
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
            onPress={() => checkRecord(email, password)}
          >
            <Text
              style={{
                color: colors.primary,
                fontSize: 20,
              }}
            >
              Zaloguj się
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
              Nie masz jeszcze konta?
            </Text>
            <TouchableOpacity
              style={{
                color: colors.white,
                left: 3,
              }}
              onPress={() => navigation.replace("SignUp")}
            >
              <Text
                style={{
                  color: colors.white,
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
              >
                Zarejestruj się
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignIn;
