import{Text,View,Image} from 'react-native'
import estilo from './style'
export default function Card({preco,nome,imagem,descricao,anoLancamento, formatosAudio}){
    return(
        <View style={estilo.cardAlbum}>
            <Image style={estilo.imagemCard} source={{ uri: imagem }} />
            <View style={{  marginLeft: 15,width:150 }}>
            <Text style={estilo.nome}>{nome}</Text>
  <Text style={estilo.descricao}>{descricao}</Text>
  <Text style={estilo.anoLancamento}>{anoLancamento}</Text>
  <Text style={estilo.formatosAudio}>{formatosAudio}</Text>
  <Text style={estilo.preco}>{preco}</Text>
            </View>
            
        </View>
    )
}