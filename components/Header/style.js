import {StyleSheet}from 'react-native'

const estilo = StyleSheet.create({
 
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 8,
    backgroundColor: '#4169E1',
    width: '100%',
    position: 'absolute', 
    top: 0, 
    left: 0, 
    zIndex: 1,
    
  },

  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Lucida Sans Unicode',
    fontStyle: 'italic',
   
  },
     


})

export default estilo;