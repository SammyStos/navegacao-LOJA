import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();

  // Função para lidar com o pressionar do botão de voltar
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={estilo.container}>
      <Header></Header>
      <View style={estilo.contentContainer}>
        <Image style={estilo.imagem} source={{ uri: route.params.imagem }} />
        <View style={estilo.textContainer}>
          <Text style={estilo.nome}>{route.params.nome}</Text>
          <Text style={estilo.descricao}>{route.params.descricao}</Text>
          <Text style={estilo.formatosAudio}>{route.params.formatosAudio}</Text>
          <Text style={estilo.preco}>{route.params.preco}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={estilo.botao}
        onPress={handleBackPress}
      >
        <Text style={estilo.botaoTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  nome: {
    color: '#333',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    color: '#666',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  formatosAudio: {
    color: '#666',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  preco: {
    color: '#4169E1',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
