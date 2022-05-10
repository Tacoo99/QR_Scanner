import * as React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity, Linking, Clipboard } from "react-native";
import { colors, images } from "../constants";

function checkResult(result){
 
  let emailChecker = /@/;

  if(emailChecker.test(result) == true){
    return Linking.openURL(`mailto:${result}`)
  }

  if(!(isNaN(result))){
    return Linking.openURL(`tel:${result}`)
  }

  else{
    return Linking.openURL(`${result}`)
  }
}

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
        <TouchableOpacity
        onPress={() => {checkResult(result)}}
        >
        <Text
          style={{
            color: 'blue',
            fontSize: 20,
            marginTop: 10,
            marginBottom: 40,
          }}
        >
          {result}
        </Text>
        </TouchableOpacity>
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
        {newHistoryGenerated(images.qr_test, "https://www.google.pl/")}
        {newHistoryGenerated(images.qr_test, "https://www.wp.pl/")}
        {newHistoryGenerated(images.qr_test, "https://www.wikipedia.pl/")}
        {newHistoryGenerated(images.qr_test, "https://www.gry.pl/")}
        {newHistoryGenerated(images.qr_test, "511234789")}
      </ScrollView>
    </View>
  );
};

export default History;
