
import { StyleSheet } from 'react-native';


import {
    logoutModalContainer,
    lightGray,
    white,
    veryLightGray,
    alertPrimaryColor,
    Gray,
    lightBlue,
    backgroundColorSplash,
  } from './Colores';
  

const stylesSala = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'#fff'
  },
  salida: {
    flex:1,
    alignItems:'center',
    padding:20,

  },
  texto: {
    flex:3,
    padding:20,
    alignItems:'center',
    fontSize:20

  },
  logo:{
    flex:1,
    padding: 20
  },
  textHeader:{
    fontSize: 20,

  }

});

export default stylesSala;
