
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
    paddingHorizontal:20,
    paddingVertical:10,

  },
  texto: {
    flex:3,
    paddingHorizontal:20,
    paddingVertical:10,
    alignItems:'center',
    fontSize:20

  },
  logo:{
    flex:1,
    paddingHorizontal:20,
    paddingVertical:10,
  },
  textHeader:{
    fontSize: 18,

  }

});

export default stylesSala;
