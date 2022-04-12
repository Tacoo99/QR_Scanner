import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../constants";
import { Scanner, Generator, ScanHistory, GeneratedHistory } from "./";

const Tab = createBottomTabNavigator();

const Tabs = () => {
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
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Skanuj" component={Scanner} />
      <Tab.Screen name="Stwórz" component={Generator} />
      <Tab.Screen name="Skanowane" component={ScanHistory} />
      <Tab.Screen name="Generowane" component={GeneratedHistory} />
    </Tab.Navigator>
  );
};

export default Tabs;
