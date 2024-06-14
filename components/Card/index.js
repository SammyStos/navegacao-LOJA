import{Text,View,Image, TouchableOpacity } from 'react-native'
import estilo from './style'
import { useNavigation } from '@react-navigation/native';

export default function Card({preco,nome,imagem,descricao,anoLancamento, formatosAudio}){
    const navigation = useNavigation();
    return(
        <TouchableOpacity 
         style={estilo.cardAlbum}
         onPress={() => navigation.navigate('Details',{imagem:imagem ,nome:nome , preco:preco,descricao:descricao ,anoLancamento:anoLancamento,formatosAudio:formatosAudio })}
         >
            <Image style={estilo.imagemCard} source={{ uri: imagem }} />
            <View style={{  marginLeft: 15,width:150 }}>
            <Text style={estilo.nome}>{nome}</Text>
  <Text style={estilo.descricao}>{descricao}</Text>
  <Text style={estilo.anoLancamento}>{anoLancamento}</Text>
  <Text style={estilo.formatosAudio}>{formatosAudio}</Text>
  <Text style={estilo.preco}>{preco}</Text>
  
            </View>
            </TouchableOpacity>
            
      
    );
}