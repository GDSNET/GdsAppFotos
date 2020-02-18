import React, { Component } from 'react';
import {
  Text,
  View, 
  Alert,
  TouchableOpacity,
Picker,
} from 'react-native';
import stylesimport from '../styles/CuerpoTarjetaStyle'

const styles = stylesimport



export default class CuerpoTarjeta extends Component {    

  // esta funcion recibe el item para mostrarlo cuando se selecciona
  funcIngresar(item){

    //Alert.alert('ingreso ',item.desc_sala)
    this.props.navigation.navigate('ISalaMenu',{item: item} )
    
  }

  render(){
    return(
      // este codigo recibe el valor en props de la api, es llamada por texto
      <View style={styles.container}> 
      <TouchableOpacity onPress={()=>{this.funcIngresar(this.props.item)}}>
 
          <Text style={styles.textTarjeta}>{this.props.item.desc_sala}</Text>
          <Text style={styles.textTarjeta}>{this.props.item.id_sala}</Text>

          </TouchableOpacity>
      </View>      
      
    );
  }
 
}



