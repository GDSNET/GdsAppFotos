
import { StyleSheet } from 'react-native';


import {
    logoutModalContainer,
    lightGray,
    white,
    veryLightGray,
    alertPrimaryColor,
    Gray,
    naranja,
    lightBlue,
    backgroundColorSplash,
  } from './Colores';
  

const stylesSala = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  sacarFotos: {
    flex: 1,
    padding: 30,
    backgroundColor: lightBlue,
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    margin:30,
  },
  enviarFotos: {
    flex: 1,
    padding: 30,
    backgroundColor: naranja,
    margin:30,
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    fontSize: 30,
    color: white,
  }
  

});

export default stylesSala;
