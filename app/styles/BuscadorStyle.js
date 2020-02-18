
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
  },
  buscador: {
    padding:4,
    alignItems:'center',
    flexDirection: 'row',

  },
  icon: {
    flex:1,
    padding:4,
   // alignItems:'center',
    marginLeft:60

  },
  input:{
    height: 40,
    width: 200,
    backgroundColor: veryLightGray,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 2,
  },

});

export default stylesSala;
