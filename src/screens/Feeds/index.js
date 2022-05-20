import React from "react";
import { View, FlatList } from "react-native";
import FeedCard from "../../components/FeedCard";
import bancoEstatico from "../../assets/feeds.json";
import { Searchbar } from "react-native-paper";
const FEEDS_POR_PAGINA = 4;

export default class Feeds extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            feeds: [],
            proximaPagina: 1,
            atualizando: false,

            usuario: null,

            nomeGpu: null,
            filtrando: false
        };
    }

    componentDidMount = () => {
        this.carregarFeeds();
        // this.recuperarUsuarioLogado();
    }

    carregarFeeds = () => {
        const feedsEstaticos = bancoEstatico.feeds;
        const { proximaPagina, filtrando } = this.state;

        if (filtrando) {
            return;
        }

        // console.log("exibindo página: " + proximaPagina);

        const feeds = feedsEstaticos.filter((feed) =>
            feed._id <= proximaPagina * FEEDS_POR_PAGINA
        );

        this.setState({
            feeds: feeds,
            proximaPagina: proximaPagina + 1,
            atualizando: false
        });
    }
    atualizar = () => {
        this.setState(
            {
                feeds: [],
                proximaPagina: 1,
                atualizando: true,
                filtrando: false,
                nomeGpu: ""
            },
            () => {
                this.carregarFeeds();
            }
        );

    }

    mostrarFeeds = () => {
        const { feeds, atualizando } = this.state;
        console.log("feeds: ", feeds[0]);

        return (
            <FlatList
                data={feeds}
                numColumns={1}

                onEndReached={() => {
                    this.carregarFeeds()
                }}
                onEndReachedThreshold={0.2}

                onRefresh={() => {
                    this.atualizar()
                }}
                refreshing={atualizando}

                keyExtractor={(item) => String(item._id)}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: 'auto' }}>
                            <FeedCard feed={item} navegador={this.props.navigation} />
                        </View>
                    )
                }}
            >
            </FlatList>);
    }



    render = () => {
        return (
            <>
                <Searchbar
                    placeholder="Digite aqui uma placa de video"
                    value={()=>{}}
                />
                {/* <Header
                    leftComponent={<></>}

                    centerComponent={
                        this.mostrarBarraDePesquisa()
                    }

                    rightComponent={
                        this.mostrarLoginOuLogout()
                    }
                >
                </Header> */}
                {this.mostrarFeeds()}
            </>);
    }
}