import React from "react";
import { View, Text, Button } from "react-native";
import bancoEstaticoDeFeeds from "../../assets/feeds.json";
import bancoEstaticoDeEspecificacoes from "../../assets/especificacao_gpu.json";

import slide1 from "../../assets/img/GTX_1650_NVIDIA_Asus_01.jpg";
import slide2 from "../../assets/img/GTX_1650_NVIDIA_Asus_01.jpg";
import slide3 from "../../assets/img/GTX_1650_NVIDIA_Asus_01.jpg";


export default class Detalhes extends React.Component {

    constructor(props) {
        super(props);
        const { feedId, navegador } = this.props;
        this.state = {
            feedId: feedId,
            navegador: navegador,
            filtrando: false
        }
    }

    componentDidMount = () => {
        this.carregarEspecificacoes();
        // this.recuperarUsuarioLogado();
    }
    carregarEspecificacoes = () => {
        const especificacoesEstaticos = bancoEstaticoDeEspecificacoes;
        const { feedId , filtrando} = this.state;
    }


    render = () => {
        const { feedId } = this.state;
        return (
            <View>
                <Text>
                    OI Sou a tela de Detalhes {feedId}
                </Text>
                <Button
                    title="Back to feeds"
                    onPress={() =>
                        this.props.navigation.navigate('Feeds')
                    }
                />

            </View>
        );
    }
}