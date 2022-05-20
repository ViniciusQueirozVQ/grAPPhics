import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Card, CardImage, CardContent } from "react-native-cards";
import Icon from "react-native-vector-icons/AntDesign";

import {
    FlexContentorLinha,
    SingleFlex,
    DoubleFlex,
    ImagemGPU,
    NomeFabricanteGPU,
    NomeFabricanteProjeto,
    NomePlaca,
    ValorAVista,
    ValorPrazo
} from "../../assets/styles";
import IMAGEM_GPU from "../../assets/img/icon_gpu.png";

export default class FeedCard extends React.Component {

    constructor(props) {
        super(props);

        const { feed, navegador } = this.props;
        this.state = {
            feed: feed,
            navegador: navegador
        }
    }

    exibirDetalhes = () => {
        const { feed, navegador } = this.state;

        navegador.navigate("Detalhes", { feedId: feed._id, navegador: navegador });
    }

    render = () => {
        const { feed } = this.state;

        return (
            <TouchableOpacity onPress={() => {
                this.exibirDetalhes();
            }}>
                <Card>

                    <CardContent>
                        <FlexContentorLinha>
                            <DoubleFlex>
                                <NomePlaca>{feed.product.name}</NomePlaca>
                                <NomeFabricanteProjeto>{feed.product.manufacturer_project}</NomeFabricanteProjeto>
                                <NomeFabricanteGPU>{feed.manufacturer.name}</NomeFabricanteGPU>
                                <ValorAVista>R$ {feed.product.full_price_in_cash}</ValorAVista>
                                <ValorPrazo>R$ {feed.product.full_price_in_installments}</ValorPrazo>
                            </DoubleFlex>
                            <SingleFlex>
                                <ImagemGPU source={feed.product.blobs[0].file}></ImagemGPU>
                                <ImagemGPU source={IMAGEM_GPU}></ImagemGPU>
                            </SingleFlex>
                        </FlexContentorLinha>
                    </CardContent>
                </Card>
            </TouchableOpacity>
        );
    }

}