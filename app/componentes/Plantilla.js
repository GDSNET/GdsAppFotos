import React, { Component } from 'react';
import {
  Text,
  View, 
  Alert,

} from 'react-native';
import stylesimport from '../styles/IndiceStyle'
const styles = stylesimport



export default class Indice extends Component {    
  constructor(props){
    super(props)   
    this.state = {            
      dsZonas: [],        
    }    
  } 

  async componentDidMount() {    

Alert.alert("Inicio");

}

  render(){
    return(
      
      <View style={styles.container}> 
          <Text>Plantilla</Text>
      </View>      
      
    );
  }
 
}



