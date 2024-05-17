import React from 'react';
import { Text, StyleSheet, View, ScrollView, FlatList, Image } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import ALBUNS from './data/chase';
import ALBUNS2 from './data/Lana';
import ALBUNS3 from './data/bruno';
import ALBUNS4 from './data/taylor';

export default function App() {
  return (
    
    <View style={estilo.container}>
     <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
      <Header />
      
      <ScrollView style={{ flex: 1, width: '100%' }} showsVerticalScrollIndicator={false}>
      <Image source={require('./assets/banner.png')} style={estilo.banner} />
      <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <Text style={estilo.nome}>ÁLBUNS CHASE ATLANTIC</Text>
        <FlatList
          data={ALBUNS}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              nome={item.nome}
              descricao={item.descricao}
              anoLancamento={item.anoLancamento}
              imagem={item.imagem}
              formatosAudio={item.formatosAudio}
              preco={item.preco}
            />
          )}
        />
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <Text style={estilo.nome}>ÁLBUNS LANA DEL REY</Text>
        <FlatList
          data={ALBUNS2}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              nome={item.nome}
              descricao={item.descricao}
              anoLancamento={item.anoLancamento}
              imagem={item.imagem}
              formatosAudio={item.formatosAudio}
              preco={item.preco}
            />
          )}
        />
         <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <Text style={estilo.nome}>ÁLBUNS BRUNO MARS</Text>
        <FlatList
          data={ALBUNS3}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              nome={item.nome}
              descricao={item.descricao}
              anoLancamento={item.anoLancamento}
              imagem={item.imagem}
              formatosAudio={item.formatosAudio}
              preco={item.preco}
            />
          )}
        />
         <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <Text style={estilo.nome}> ÁLBUNS TAYLOR SWIFT</Text>
        <FlatList
          data={ALBUNS4}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              nome={item.nome}
              descricao={item.descricao}
              anoLancamento={item.anoLancamento}
              imagem={item.imagem}
              formatosAudio={item.formatosAudio}
              preco={item.preco}
            />
          )}
        />
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CAF0F8',
    borderColor: '#90E0EF',
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
    color: '#6B6FCB',
    marginBottom: 10,
  },
});
