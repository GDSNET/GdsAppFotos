
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  TextInput,
  Alert
  
} from 'react-native';

export default class Glosario extends Component {
  constructor(props){
    super(props)
    this.state = {  
      value: '',   
    }
  }

  Limpiar(idSala){
    const nameStorage =  'gdsFotos' + idSala;   
    AsyncStorage.removeItem(nameStorage);
    Alert.alert("eliminando", "Sala:"+idSala)
  
  }

  OnChangeText(value){
    this.setState({
      value: value
    })
  }

  render(){
    return(
      <View style={styles.container}>      
          <Text> - Ingrese el ID de la sala, por lo general es un numero que se encuantra bajo la descripcion.</Text> 
          <Text> - Esto limpiara por completo la sala y sus registros, suerte :D </Text> 
          <TextInput    keyboardType='numeric' onChangeText={(value)=>this.OnChangeText(value)} />
            <Button title="Limpiar" onPress={()=>this.Limpiar(this.state.value)} />

      </View>
    );
  }
 
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F1ED'
    },
});

