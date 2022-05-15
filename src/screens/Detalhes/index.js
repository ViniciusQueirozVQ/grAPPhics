import React from "react";
import { View, Text } from "react-native";

export default class Detalhes extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <View>
                <Text>
                    OI Sou a tela de Detalhes
                </Text>
            </View>
        );
      }
}