import styled from 'styled-components';

export const ImagemGPU = styled.Image`
    padding: 4px;
    width: 36px;
    height: 36px;
    border-radius: 18px;
`;
export const LogoFabricanteGPU = styled.Image`
    padding: 4px;
    width: 36px;
    height: 36px;
    border-radius: 18px;
`;

export const NomePlaca = styled.Text`
    padding: 8px;
    font-size: 16.0;
    color: #59594a;
`;

export const NomeFabricanteProjeto = styled.Text`
    font-size: 16.0;
    font-weight: bold;
    color: #59594a;
`;

export const NomeFabricanteGPU = styled.Text`
    font-size: 14.0;
    color: #59594a;
`;

export const ValorPrazo = styled.Text`
    font-size: 14.0;
    font-weight: bold;
    color: #59594a;
`;


export const ValorAVista = styled.Text`
    font-size: 14.0;
    font-weight: bold;
    color: #59594a;
`;

export const FlexContentorLinha = styled.View`
    flexDirection: row;
`;
export const FlexContentorColuna = styled.View`
    flexDirection: column;
`;

export const SingleFlex = styled.View`
    flex: 1;
`;
export const DoubleFlex = styled.View`
    flex: 2;
`;




///Apagar os que não forem usados


export const Likes = styled.Text`
    font-size: 14;
    color: #59594a;
`;

export const EntradaNomeProduto = styled.TextInput`
    height: 40px;
    width: 100%;
    background-color: #fff;
    border-color: #c7c7c7;
    border-width: 1;
    border-radius: 8px;
`;

export const CentralizadoNaMesmaLinha = styled.View`
    flexDirection: row;
    justify-content: center;
    align-items: center;
`;

export const EsquerdaDaMesmaLinha = styled.View`
    flexDirection: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Espacador = styled.View`
    flexDirection: row;
    padding: 3px;
`;

export const ContenedorMenu = styled.View`
    flex: 1;
    padding: 4px;
    font-size: 18;
    background-color: #fff;
`;

export const DivisorMenu = styled.View`
    marginVertical: 5;
    marginHorizontal: 5;

    border-bottom-width: 1;
    borderColor: #3f6ea3;
`;

export const SecaoComentarios = styled.Text`
    padding: 8px;
    font-size: 16;
    font-weight: bold;
    color: #59594a;
`;

export const DivisorComentario = styled.View`
    marginVertical: 5;
    marginHorizontal: 5;

    border-bottom-width: 1;
    borderColor: #3f6ea3;
`;

export const ContenedorComentarios = styled.View`
    width: 100%;
    height: 100%;
    background-color: #fff;
`;

export const ContenedorComentarioDoUsuario = styled.View`
    background-color: #b4d2e7;
    border-color: #c7c7c7;
    border-width: 1;
    margin-horizontal: 5px;
`;

export const ContenedorComentario = styled.View`
    background-color: #fff;
    border-color: #c7c7c7;
    border-width: 1;
    margin-horizontal: 5px;
`;

export const EspacadorComentario = styled.View`
    marginVertical: 2;
`;

export const ContenedorNovoComentario = styled.View`
    margin-top: 100;
    align-self: center;
    width: 95%;
    border-color: #7ca982;
    border-width: 1;
    border-radius: 6;
    background-color: #fffcf9;
`;

export const AutorComentario = styled.Text`
    padding: 6px;
    font-size: 12;
    color: #283044;
`;

export const Comentario = styled.Text`
    padding: 6px;
    font-size: 14;
    color: #283044;
`;

export const DataComentario = styled.Text`
    padding: 6px;
    font-size: 12;
    color: #283044;
`;

export const ContenedorMensagem = styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: #eff2f1;
`;

export const Mensagem = styled.Text`
    color: #283044;
`;

export const Cabecalho = {
    backgroundColor: '#f0f0f0',
    justifyContent: 'space-evenly',
    borderBottomWidth: 0
}
