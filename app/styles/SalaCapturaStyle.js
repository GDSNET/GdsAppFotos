
import { StyleSheet } from 'react-native';


import {

    naranja,

  } from './Colores';
  

const stylesSala = StyleSheet.create({
  container: {
    flex: 1,
    margin:10,
    //flexDirection: 'row',
    backgroundColor:'#FFF'

  },
  contenedor: {
    flex:1,
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  camara: {
    flex: 8,
  },
  textoAlerta:{
    justifyContent: 'space-between',
    fontSize: 30,
    color: naranja
  }

});

export default stylesSala;
