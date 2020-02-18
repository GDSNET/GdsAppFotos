import React, { Component } from 'react';
import {
  Text,
  View, 
  Alert,
  TextInput

} from 'react-native';
import stylesimport from '../styles/BuscadorStyle'
import Icon from 'react-native-vector-icons/EvilIcons';

const styles = stylesimport



export default class Buscador extends Component {    


  async componentDidMount() {    

//Alert.alert("Inicio");

}
filterSearch(){


}


  render(){
    return(
      
      <View style={styles.container}> 
      
      <View style={styles.icon}> 

      </View>      
      
      <View style={styles.buscador}> 
      <Icon name='search' size={25} />
      <TextInput onChangeText={(text) => this.props.filterSearch(text)}
                      style = {styles.input}
                      keyboardType='email-address' 
                      autoCorrect={false}
                      placeholder=''
                      placeholderTextColor='#555' />

      </View>    
      <View style={styles.icon}> 
          
      </View>     
      
      </View>      
      
    );
  }
 
}



