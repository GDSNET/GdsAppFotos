import React, { Component } from 'react';
import {
  Text,
  View, 
  Alert,
  TouchableOpacity,
  Image,
  AsyncStorage

} from 'react-native';
import stylesimport from '../styles/HeaderStyle'
import Icon from 'react-native-vector-icons/SimpleLineIcons';


const styles = stylesimport



export default class Indice extends Component {    


async componentDidMount() {    

//Alert.alert("Inicio");

}


funcSalir(){
  const nameStorage =  'usuarios';
   AsyncStorage.removeItem(nameStorage);
   this.props.navigation.navigate('Login');  
}




  render(){
    return(
      //  en el primer view recibo la funcion salir en el icono despues de la accion onPress
      // en el segundo view recibo el valor de titulo desde index
      <View style={styles.container}> 
          <View style={styles.salida}> 
                <TouchableOpacity onPress={()=>{this.funcSalir()}}>
                     <Icon name='logout' size={25} style={styles.activeBorderColor} />
                </TouchableOpacity>
          </View>      

          <View style={styles.texto}> 
          <Text style={styles.textHeader}>{this.props.descTitulo}</Text>
          </View>      

          <View style={styles.logo}> 
          <Image 
                    style={{width: 50, height:30}}
                    source={require('../images/gds.png')} />
         </View>      
      </View>      
      
    );
  }
 
}



