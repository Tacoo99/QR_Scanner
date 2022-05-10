import * as React from "react";
import { Text, View, Image, ScrollView, Linking, Clipboard } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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

function newHistoryScan(image, result) {

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
        ──────── Skanowane kody ────────
      </Text>
      <ScrollView>
        {newHistoryScan(images.qr_test, "https://www.google.pl/")}
        {newHistoryScan(images.qr_test, "https://www.wp.pl/")}
        {newHistoryScan(images.qr_test, "https://www.wikipedia.pl/")}
        {newHistoryScan(images.qr_test, "https://www.gry.pl/")}
        {newHistoryScan(images.qr_test, "514711600")}
      </ScrollView>
    </View>
  );
};

export default History;
