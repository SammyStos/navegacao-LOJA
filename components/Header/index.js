import {View, Text} from 'react-native'
import estilo from './style'

export default function Header(){
    return(
        <>
            <Text style={estilo.titulo}>Nossa Rotina Semanal</Text>
            <Text style={estilo.subtitulo}>Total de Horas = 168 - 100%</Text>
            <Text style={estilo.subtitulo}>Rafa e Sammy</Text>
             <View style={{width:'95%', flexDirection: 'row', marginTop: 20, alignItems:'center', justifyContent:"space-between" }}>
            <Text style={estilo.tituloCard}>Atividade</Text>
            <Text style={estilo.tituloCard}>Descrição</Text>
            <Text style={estilo.tituloCard}>Porcentagem </Text>
            </View>

        </>
    )
}