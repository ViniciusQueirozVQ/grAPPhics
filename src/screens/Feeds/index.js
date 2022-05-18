import React from "react";
import { View, Text } from "react-native";
import bancoEstatico from "../../assets/feeds.json";

export default class Feeds extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <View>
                <Text>
                    OI Sou a tela de Feeds
                </Text>
            </View>
        );
    }
}