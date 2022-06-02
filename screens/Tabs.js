import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../constants";
import { Scanner, Generator, ScanHistory, GeneratedHistory, Account, Help } from "./";

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Skanuj") {
            iconName = "qrcode";
          } else if (route.name === "Stwórz") {
            iconName = "plus";
          } else if (route.name === "Skanowane") {
            iconName = "list";
          } else if (route.name === "Generowane") {
            iconName = "history";
          } else if (route.name === "Konto") {
            iconName = "user";
          } else if (route.name === "Pomoc") {
            iconName = "info";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Skanuj" component={Scanner} initialParams={{login: props.route.params.login}} />
      <Tab.Screen name="Stwórz" component={Generator} initialParams={{login: props.route.params.login}} />
      <Tab.Screen name="Skanowane" component={ScanHistory} initialParams={{login: props.route.params.login}} />
      <Tab.Screen name="Generowane" component={GeneratedHistory} initialParams={{login: props.route.params.login}} />
      <Tab.Screen name="Konto" component={Account} initialParams={{login: props.route.params.login}} />
      <Tab.Screen name="Pomoc" component={Help} />
    </Tab.Navigator>
  );
};

export default Tabs;
