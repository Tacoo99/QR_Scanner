import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";

import { images, colors, sizes } from "../constants";

const Welcome = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#258CE3",
        flex: 1,
        top: 30,
        alignItems: "center",
      }}
    >
      <View
        style={{
          top: 40,
        }}
      >
        <Image
          source={images.qr_code}
          resizeMode="contain"
          style={{
            width: 350,
            height: 150,
          }}
        />
      </View>

      <Text
        style={{
          top: 100,
          fontSize: 40,
          color: colors.white,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Witaj w QR_Scanner!
      </Text>

      <Text
        style={{
          top: 130,
          fontSize: 25,
          color: colors.white,
          fontWeight: "bold",
        }}
      >
        Zaloguj się albo zarejestruj
      </Text>

      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: colors.white,
          top: 220,
          borderRadius: 30,
          width: 300,
          height: 60,
        }}
        onPress={() => navigation.replace("SignIn")}
      >
        <Text
          style={{
            color: colors.primary,
            fontSize: 20,
            marginVertical: 17,
            fontWeight: "bold",
          }}
        >
          Zaloguj się
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: colors.white,
          top: 250,
          borderRadius: 30,
          width: 300,
          height: 60,
        }}
        onPress={() => navigation.replace("SignUp")}
      >
        <Text
          style={{
            color: colors.primary,
            fontSize: 20,
            marginVertical: 17,
            fontWeight: "bold",
          }}
        >
          Zarejestruj się
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignItems: "center",
          top: 245,
        }}
        onPress={() => navigation.replace("Home")}
      >
        <Text
          style={{
            color: colors.white,
            fontSize: 14,
            marginVertical: 17,
          }}
        >
          Kontynuuj bez logowania
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          top: 200,
        }}
      >
        <Image
          source={images.bottom_panel}
          resizeMode="contain"
          style={{
            width: sizes.width,
            height: 150,
          }}
        />
      </View>
    </View>
  );
};

export default Welcome;
