import React from "react";

import { StatusBar, Text} from "react-native";
import { MenuProvider } from "react-native-popup-menu";


import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Feeds from "./src/screens/Feeds";
import Detalhes from "./src/screens/Detalhes";

// const Navegador = createStackNavigator(
//   {
//     Feeds: { screen: Feeds },
//     Detalhes: { screen: Detalhes }
//   },
//   {
//     headerMode: "none"
//   }
// );

// const Contentor = createAppContainer(Navegador)

export default function App() {
  return (
    <MenuProvider>
      <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
      <Feeds> Oi Aqui é a tela Inicial </Feeds>
      <Text> Aqui temos que mostrar os feeds</Text>
    </MenuProvider>
  )
}