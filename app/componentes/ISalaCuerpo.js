import React, { Component } from 'react';
import {
  Text,
  View, 
  Alert,
  FlatList

} from 'react-native';
import stylesimport from '../styles/BuscadorStyle'
const styles = stylesimport
import CuerpoTarjetas from './ISalaCuerpoTarjeta'


export default class Cuerpo extends Component {    


//esta funcion recibe el valor de item que este esta alojando descripcion y id de sala desde la api
//load tarjeta que muestra sala e id es cargada con flatlist
// navigation sirve para poder viajar desde la hoja de sala hasta la hoja de categorias

loadTarjeta(item){
  return(
   <CuerpoTarjetas item={item}
   navigation={this.props.navigation}/>
  )
}

  render(){
    return(
      
      <View style={styles.container}> 
          <View style={styles.container}> 
         

<FlatList         
          data={this.props.apiSala.sort(function(a, b){
            if(a.desc_sala > b.desc_sala) return -1;
            if(a.desc_sala < b.desc_sala) return 1;
            return 0})}
          extraData={this.state}
          keyExtractor={(item) => "" + item.id_sala}
          renderItem={({item}) => this.loadTarjeta(item)}
          
        />
          
          </View>  

      </View>      
// el flat lis recibe la api, la ordena los datos de la api, los guarda en el elemento item que 
// mas arriba es llamado para ser usado en la funcion loadTarjeta      
    );
  }
 
}



