import React from "react";

import { StatusBar, Text, View, Button } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Feeds from "./src/screens/Feeds";
import Detalhes from "./src/screens/Detalhes";

const Stack = createStackNavigator();

function TelaHome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Canal</Text>
      <Text>Youtube Tela</Text>

      <Button
        title="Detalhes"
        onPress={() => navigation.navigate('Detalhes')}
      />

      <Button
        title="Feeds"
        onPress={() => navigation.navigate('Feeds')}
      />

    </View>
  );
}

export default function App() {
  return (
    <MenuProvider>
      <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={TelaHome}
            options={{ title: 'Tela de Home' }}
          />
          <Stack.Screen
            name="Feeds"
            component={Feeds}
            options={{ title: 'Tela de Feeds' }}
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