import {View, Text, Image} from 'react-native'
import estilo from './style'

export default function Header(){
    return(
        <>
     <View style={estilo.navbar}>
        <Image
          source={{ uri: 'https://www.freepnglogos.com/uploads/apple-music-logo-circle-png-28.png' }}
          style={estilo.logo}
        />
        <Text style={estilo.logoText}>DISCOTEC</Text>
      </View>
      <Text style={estilo.logoText}> </Text>
      <Text style={estilo.logoText}> </Text>
      
        </>
    )
}