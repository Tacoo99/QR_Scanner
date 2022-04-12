import * as React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { colors, images } from "../constants";
import Hyperlink from "react-native-hyperlink";

function newHistoryGenerated(image, result) {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Image
        source={image}
        resizeMode="contain"
        style={{
          width: 350,
          height: 150,
        }}
      />

      <Hyperlink linkDefault={true}>
        <Text
          style={{
            color: "blue",
            fontSize: 20,
            marginTop: 10,
            marginBottom: 40,
          }}
        >
          {result}
        </Text>
      </Hyperlink>
    </View>
  );
}

const History = () => {
  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          margin: 30,
          color: colors.darkGray,
        }}
      >
        ──────── Wygenerowane kody ────────
      </Text>
      <ScrollView>
        {newHistoryGenerated(images.qr_test, "www.google.pl")}
        {newHistoryGenerated(images.qr_test, "www.wp.pl")}
        {newHistoryGenerated(images.qr_test, "www.wikipedia.pl")}
        {newHistoryGenerated(images.qr_test, "www.gry.pl")}
        {newHistoryGenerated(images.qr_test, "511234789")}
      </ScrollView>
    </View>
  );
};

export default History;
