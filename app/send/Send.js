

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image
} from 'react-native';

import HeadersSec from '../componentes/HeadersSec';
import Icon from 'react-native-vector-icons/Feather';
import RNFS from 'react-native-fs';






export default class Send extends Component {
  constructor(props){
    super(props)
    this.state = {  
      estado_envio: true,
      titulo_envio: 'Envio de Sala', 
      subtitulo_envio: 'Preparado para enviar...',
      estado_actividad: false,
      Fotos: [],
    }
  }

  async componentDidMount(){

    await this.cargarFlat()
   }


async cargarFlat(){


  const nameStorage = await 'gdsFotos' +  this.props.navigation.state.params.item.id_sala;   
  var json = await AsyncStorage.getItem(nameStorage);
  const newFotos = await JSON.parse(json); 
  await this.setState(
    {
      Fotos: newFotos,
    }
  )

  //Alert.alert("Send", JSON.stringify(newFotos));
}


  onLoad(id_sala,desc_sala){


    if (this.state.estado_envio) {

        return (


          <TouchableOpacity style={styles.BotonEnviar} 
           onPress={()=>{this.onSend(id_sala,desc_sala)}}>
           <Text style={styles.text}> Enviar  </Text>                  
           </TouchableOpacity>  

        )
      }
  }


async onSend(id_sala,desc_sala){
this.props.navigation.navigate('Sending', {id_sala: id_sala,desc_sala: desc_sala})                 

}

onSending(){

try {


  Alert.alert(
    'Enviado',
    'Sus Datos fueron enviados con exito!!',
    [
      {text: 'OK', onPress: () => this.onSendEnd()},
    ],
    { cancelable: false }
  )

  this.setState({
    estado_envio: false,
    estado_actividad: true,
    titulo_envio: 'Envio OK', 
    subtitulo_envio: '...Enviado',
  })
  
} catch (error) {

  Alert.alert("Error de Conexion al Enviar", error.message)
}



}

onSendEnd(){
  Alert.alert("Volviendo")
  this.setState({
    estado_actividad: false
  })
}

funVolver(){
  this.props.navigation.goBack();
}

async eliminarFoto(fotos){



  var uri =  fotos.uri;
  var id_sala =  fotos.id_sala
  var nameStorage =  'gdsFotos' + id_sala  
      

  var result = await  this.state.Fotos.filter(function(item) {
    return item.uri !== uri;
  });

  this.setState({Fotos: result})
  AsyncStorage.setItem(nameStorage,  JSON.stringify(result));
  RNFS.unlink(uri)

  Alert.alert("Foto Eliminada" , uri)
}

loadSalas(fotos){

  return (
  

            
 <View style={styles.container}>
          <View style={styles.view_title}>
            <Image source={{uri: fotos.uri}} style={{width: 200, height: 300}} /> 
          <TouchableOpacity style={styles.view_boton} onPress={()=>this.eliminarFoto(fotos)} >         
            <Icon name='x' size={30} />  
          </TouchableOpacity>                 
          </View>
          <View style={styles.view_subtitle}>                   
            <Text style={styles.subtext}>{fotos.fecha}</Text>             
            <Text style={styles.subtext}> {fotos.uri} </Text>                         
          </View>
        </View>
   
 
            ) 
      }
  


      funCargarFotos(){
        
        try {
          return(
          <FlatList            
          data={this.state.Fotos.sort(function(a, b){
    
              if(a.fecha > b.fecha) return -1;
              if(a.fecha < b.fecha) return 1;
              return 0
           })}
          extraData={this.state}
          keyExtractor={(item, index) => "" + item.id_sala}
          renderItem={({item}) => this.loadSalas(item)}
        />
        )
          
        } catch (error) {
          return(<Text>No existen Fotos</Text>)
          
        }
     


      }

onSubtitle(){
  return (this.state.estado_actividad?
  <ActivityIndicator size='large' color="#5D6D7E"/>:
  <Text style={styles.subtext}> {this.state.subtitulo_envio} </Text>  )
}


  render(){
    const id_sala = this.props.navigation.state.params.item.id_sala
    const desc_sala = this.props.navigation.state.params.item.desc_sala
    
    return(
      <View style={styles.container}>      
          
              <View style={styles.header}> 
                <HeadersSec 
                    navigation= {this.props.navigation}
                    descTitulo= {desc_sala}/>
              </View>    

        <View style={styles.salas}> 

           {this.funCargarFotos()}      

                              
                                          
      </View>   
                              
     <View style={styles.contbotonenviar}>                               

                    {this.onLoad(id_sala,desc_sala)}

          </View>   
      </View>
    );
  }
 
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 10
    },
  view_boton: {
    flex: 1,     
    marginHorizontal: 15,
    margin: 5,
    flexDirection: 'column',  
    backgroundColor: '#FFF',       
    },
    view_title: {
      flexDirection: 'row',
    },
  header: {
    flex: 1
  },
  salas: {flex: 6},
  contbotonenviar: {flex:1},
  BotonEnviar: {padding: 20, alignItems: 'center',backgroundColor: '#567'}
  ,text: {
    color: '#fff'
  }

});


