import * as React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity, Linking, Clipboard, Alert  } from "react-native";
import { colors, images } from "../constants";
import Icon from 'react-native-vector-icons/FontAwesome';


function openingURL(choice, result){

  if(choice == "mail"){
    return Linking.openURL(`mailto:${result}`)
  }

  if(choice == "tel"){
    return Linking.openURL(`tel:${result}`)
  }

  if(choice == "tekst"){
    return Linking.openURL(`${result}`)
  }
}

function myClipboard(text){
  Clipboard.setString(text)
}

function myAlert(choice,result){
  Alert.alert(
    "Co chcesz zrobić?",
    "Wybierz opcję",
    [
      {
        text: "Kopiuj",
        onPress: () => {
          myClipboard(result),
          Alert.alert(
            "",
            "Tekst został skopiowany do schowka"
          )
        },
        style: "Kopiuj",
      },
      {
        text: "Otwórz",
        onPress: () => {
          openingURL(choice,result)
        },
        style: "Otwórz",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "Nie wykonano żadnej akcji",
          "Kliknij OK, aby zamknąć okno"
        ),
    }
  );
}

function checkResult(result){
 
  let emailChecker = /@/;

  if(emailChecker.test(result) == true){
    myAlert("mail",result)
  }

  if(!(isNaN(result))){
    myAlert("tel",result)
  }

  else{
    myAlert("tekst",result)
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


const History = ( {route,navigation}) => {

  let username = route.params.login;

  if(username != "Anonim"){
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
        ─────── Wygenerowane kody ───────
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
      }

    else{
      return (
        <View style={{
            flex:1,
            alignItems: 'center',
            top: '5%'
        }}>
            <Image
      source={images.qr_code}
      resizeMode="contain"
      style={{
        width: 350,
        height: 150,
        marginBottom: '10%'
      }}
    />
    <Text style={{
        fontSize: 25,
    }}>
    Funkcja dostępna po zalogowaniu!
    </Text>
    <TouchableOpacity
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.primary,
            borderRadius: 40,
            width: 250,
            marginTop: 30,
            alignItems: 'center',
            height: 50,
        }}
  
        onPress={() => navigation.replace("SignUp")}
        >
            <Text
                style={{
                    color: 'white',
                    fontSize: 25,
                    backgroundColor: null
                }}
            >
                <Icon name="sign-out" size={32} marginRight={20} color={'white'} /> Zaloguj się
            </Text>
  
        </TouchableOpacity>
        <TouchableOpacity
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.primary,
            borderRadius: 40,
            width: 250,
            marginTop: 20,
            alignItems: 'center',
            height: 50,
        }}
  
        onPress={() => navigation.replace("SignUp")}
        >
            <Text
                style={{
                    color: 'white',
                    fontSize: 25,
                    backgroundColor: null
                }}
            >
                <Icon name="file" size={32} marginRight={20} color={'white'} /> Załóż konto
            </Text>
  
        </TouchableOpacity>
    </View>
    )
    }
};

export default History;
