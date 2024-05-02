import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
export default function App() {
  return (
    <View style={estilo.container}>
      <Header></Header>
      <Card 
        porcentagem = '16%' 
        titulo = 'Assistir Alanzoka'
        imagem ='https://i.pinimg.com/474x/56/c9/ca/56c9ca65b23712ec0eaa8450f07e5a28.jpg'
        descricao ='Amo assistir Alanzoka, quando chego da Etec, ainda mais se for almoçando' 
      />  
      <Card 
        porcentagem = '16%' 
        titulo = 'Comer'
        imagem ='https://s2-receitas.glbimg.com/1EvgesvUMInKftWfkHKQKf6D9FI=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/8/O/xH9h1GSnW1LhMobyL7hQ/strogonoff-de-frango-receita.jpg'
        descricao ='Amo comer um pratão quando chego da Etec, principalmente se for Strogonoff' 
      /> 
       <Card 
        porcentagem = '16%' 
        titulo = 'Mimir'
        imagem ='https://s2-vidadebicho.glbimg.com/VzTonKa6N1PhtLkQInss22tUhww=/0x0:960x640/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2022/C/q/rSqQiHQuOjeBeckevESw/2022-01-27-vidadebicho-gato-dormindo-tabby-cat-6788375-960-720.jpeg'
        descricao ='Amo mimir quando chego da Etec, ou quando estou somente em casa (Acordo somente no dia seguinte)' 
      />  
      <Card 
        porcentagem = '16%' 
        titulo = 'Lições da Etec'
        imagem ='https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/62649497_1099632600224745_1950717718562865152_n.jpg'
        descricao ='Fico triste quando tem lição para fazer, mas tenho que fazer para tirar nota boa ' 
      /> 
       <Card 
        porcentagem = '16%' 
        titulo = 'Ouvir Musica'
        imagem ='https://www.billboard.com/wp-content/uploads/2023/12/taylor-swift-eras-foxborough-2023-billboard-1548.jpg'
        descricao ='Amo escutar musica, ainda mais se for da loirinha ' 
      />  
      <Card 
        porcentagem = '16%' 
        titulo = 'Ler livros'
        imagem ='https://play-lh.googleusercontent.com/Y244hl0BV8-nfkNJC5v_8awOsD0tN2emx-O1ZIzGrMdO9rgXQFB0AACoSczu0NAxKhY'
        descricao ='Amo ler, qualquer tipo de livros, ainda mais se for da biblia laranja' 
      /> 
      
     
      
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9932CC',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
    
  }
});
