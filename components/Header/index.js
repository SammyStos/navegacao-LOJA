import {View, Text, Image} from 'react-native'
import estilo from './style'

export default function Header(){
    return(
        <>
     <View style={estilo.navbar}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2106/2106904.png' }}
          style={estilo.logo}
        />
        <Text style={estilo.logoText}>DISCOTEC</Text>
      </View>
      <Text style={estilo.logoText}> </Text>
      <Text style={estilo.logoText}> </Text>
      
        </>
    )
}