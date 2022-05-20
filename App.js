import React from "react";

import { StatusBar, Text, View, Button } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Feeds from "./src/screens/Feeds";
import Detalhes from "./src/screens/Detalhes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <MenuProvider>
      <StatusBar barStyle="dark-content" backgroundColor={"#fff"}>Oi</StatusBar>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Feeds">
          <Stack.Screen
            name="Feeds"
            component={Feeds}
            options={{ title: 'Tela de Feeds'}}
          />
          <Stack.Screen
            name="Detalhes"
            component={Detalhes}
            options={{ title: 'Tela de Detalhes da GPU' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  )
}