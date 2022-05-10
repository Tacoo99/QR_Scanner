import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import { Welcome, SignIn, SignUp, Tabs } from "./screens";

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Welcome"}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Scanner" component={Tabs} />
        <Stack.Screen name="Account" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
