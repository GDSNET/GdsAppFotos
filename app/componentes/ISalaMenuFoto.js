import React, { Component } from 'react';
import {
  Text,
  View, 
  Alert,
  FlatList,
  TouchableOpacity
} from 'react-native';
import stylesimport from '../styles/ISalaMenuFotoStyle'
const styles = stylesimport



export default class ISalaMenuFoto extends Component {    


//esta funcion recibe el valor de item que este esta alojando descripcion y id de sala desde la api
//load tarjeta que muestra sala e id es cargada con flatlist
// navigation sirve para poder viajar desde la hoja de sala hasta la hoja de categorias

funcIngresar(item){

  //this.props.navigation.navigate('ISalaMenuCaptura')
  this.props.navigation.navigate('ISalaCaptura', {item: item});
  //Alert.alert('este es un obj');
}

funEnviar(item){

  //this.props.navigation.navigate('ISalaMenuCaptura')
  this.props.navigation.navigate('Send', {item: item});
  //Alert.alert('este es un obj');
}

  render(){
    return(
      
      <View style={styles.container}> 
        <View style={styles.sacarFotos}>
          <TouchableOpacity onPress={()=>{this.funcIngresar(this.props.navigation.state.params.item)}}>
            <View style={styles.sacarFotos}>
              <Text style={styles.text}>Tomar Fotos</Text>
            </View>  
          </TouchableOpacity>
          </View>
         <View style={styles.enviarFotos}>
         <TouchableOpacity onPress={()=>{this.funEnviar(this.props.navigation.state.params.item)}}>
            <View style={styles.enviarFotos}>
              <Text style={styles.text}>Enviar Fotos</Text>
            </View>  
          </TouchableOpacity>
        </View>  
      </View>          
    );
  }
 
}



