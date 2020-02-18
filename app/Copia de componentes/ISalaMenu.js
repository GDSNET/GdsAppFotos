import React, { Component } from 'react';
import {
  Text,
  View, 
  Alert,

} from 'react-native';
import stylesimport from '../styles/ISalaMenuStyle'
const styles = stylesimport
import HeadersSec from './HeadersSec'
import Buscador from './Buscador'
import MenuFoto from './ISalaMenuFoto'
import apiSala from '../api/apiSalas'


export default class ISalaMenu extends Component {  
  
  // en el constructor recibo el titulo de la pagina principal en una variable
  // recibo api y se guarda en una variable

  constructor(props){
    super(props)   
    this.state = {            
      descTitulo: 'Menu',
     // dsSalas:apiSala,

    }    
  } 

  async componentDidMount() {    

//Alert.alert("Inicio");

}
// aqui en cada view recibe cada hoja que se va creando para armar una principal
// en el view de cuerpo se envia la sala atraves de la variable

  render(){



    return(
      
      <View style={styles.container}> 
          <View style={styles.header}>
              <HeadersSec 
              navigation= {this.props.navigation}
              descTitulo= {this.state.descTitulo}/>
          </View>  

          <View style={styles.cuerpo}> 
              <MenuFoto 
              item={this.props.navigation.state.params.item}
              navigation={this.props.navigation}
              />
          </View>  

      </View>      
      
    );
  }
 
}



