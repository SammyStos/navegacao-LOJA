import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  cardAlbum: {
    marginTop: 20,
    backgroundColor: 'transparent',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 2,
    borderColor: 'white',
    borderWidth: 2,
    flexDirection: 'column',
    padding: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 20 
  },
  imagemCard: {
    width: '100%',
    height: 150,
    resizeMode: 'cover', 
    borderRadius: 10,
    marginBottom: 10,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4169E1',
    marginBottom: 10,
    fontFamily: 'Lucida Sans Unicode',
  },
  descricao: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    
  },
  anoLancamento: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
  formatosAudio: {
    fontSize: 14,
    color: '#999',
    marginBottom: 15,
  },
  preco: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4169E1',
    marginTop: 10,
  },
  botaoSaibaMais: {
    backgroundColor: '#1E90FF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotao: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default estilo;
