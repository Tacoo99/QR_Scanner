import React, {useState} from "react";
import { Text, View, Image, ScrollView, Linking, Clipboard, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors, images, API } from "../constants";
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

let i = 0;



function getItem(username){
    let api = API.getScanned;

    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    var Data = {
      Username: username,
    };

    fetch(api, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data), //convert data to JSON
    })
      .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
      .then((response) => {

        for(i; i < response.length; i++){
          if( (response[i]) == null ){
            //nic nie rób
        }
        
        else{
          text[i] = (response[i].text + " ");
        }
      }
        
        
      })
      .catch((error) => {
        alert("[ERROR]" + error);
      });
  }

  const text = [];


const History = ({route,navigation}) => {
  let username = route.params.login;
  
  
  const loopItems = () => {
    return text.map(item=>{
      return newHistoryScan(images.qr_test, item);
  })
}
  

  if(username != "Anonim"){
    getItem(username);

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
            {loopItems()}
      

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
