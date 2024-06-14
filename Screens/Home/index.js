import React from 'react';
import { Text, StyleSheet, View, Image,FlatList, ScrollView} from 'react-native';
import Header from '../../components/Header'; 
import Card from '../../components/Card';
import ALBUNS from '../../data/chase';
import ALBUNS3 from '../../data/bruno';
import ALBUNS4 from '../../data/taylor'
import ALBUNS1 from '../../data/Lana';


export default function Home() {
  return (
    <View style={estilo.container}>
      <Header></Header>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <ScrollView style={{ flex: 1, width: '100%' }} showsVerticalScrollIndicator={false}>
      <Image source={require('../../assets/banner.png')} style={estilo.banner} />
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
     <View style = {{width:'100%'}}>
     <Text style={estilo.nome}>ÁLBUNS CHASE ATLANTIC</Text>
      <FlatList 
      data = {ALBUNS}
      horizontal ={true}
      keyExtractor = {(item)=>item.id}
      renderItem = {({item}) => (

        <Card 
        nome = {item.nome}
        preco = {item.preco}
        anoLancamento = {item.anoLancamento}
        descricao ={item.descricao}
        formatosAudio = {item.formatosAudio}
        imagem ={item.imagem}
        
        />
      )}
    />
      
      </View>     
       <View style = {{width:'100%'}}>
       <br>
       </br>
       <br>
      </br>
      <br>
      </br>
       <Text style={estilo.nome}> ÁLBUNS BRUNO MARS </Text>
      <FlatList 
      data = {ALBUNS3}
      horizontal ={true}
      keyExtractor = {(item)=>item.id}
      renderItem = {({item}) => (

        <Card 
        nome = {item.nome}
        preco = {item.preco}
        anoLancamento = {item.anoLancamento}
        descricao ={item.descricao}
        formatosAudio = {item.formatosAudio}
        imagem ={item.imagem}
        
        />
      )}
    />
      
      </View>   
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <View style = {{width:'100%'}}>
       <Text style={estilo.nome}> ÁLBUNS TAYLOR SWIFT  </Text>
      <FlatList 
      data = {ALBUNS4}
      horizontal ={true}
      keyExtractor = {(item)=>item.id}
      renderItem = {({item}) => (

        <Card 
        nome = {item.nome}
        preco = {item.preco}
        anoLancamento = {item.anoLancamento}
        descricao ={item.descricao}
        formatosAudio = {item.formatosAudio}
        imagem ={item.imagem}
        
        />
      )}
    />
      
      </View>   
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <View style = {{width:'100%'}}>
       <Text style={estilo.nome}> ÁLBUNS LANA DEL REY  </Text>
      <FlatList 
      data = {ALBUNS1}
      horizontal ={true}
      keyExtractor = {(item)=>item.id}
      renderItem = {({item}) => (

        <Card 
        nome = {item.nome}
        preco = {item.preco}
        anoLancamento = {item.anoLancamento}
        descricao ={item.descricao}
        formatosAudio = {item.formatosAudio}
        imagem ={item.imagem}
        
        />
      )}
    />
      
      </View>   
      
        
      
      </ScrollView>
    </View>
    
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'CAF0F8',
    borderColor: '#4169E1',
    paddingHorizontal: 20,
  },

    banner: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      overflow: 'hidden',
    },
    nome: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#4169E1',
      marginBottom: 10,
      fontFamily: 'Lucida Sans Unicode',
    },
  
});