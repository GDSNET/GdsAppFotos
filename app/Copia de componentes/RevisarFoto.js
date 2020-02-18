
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  AsyncStorage
} from 'react-native';

import Modal from 'react-native-modal'
import Circle from 'react-native-vector-icons/FontAwesome';



export default class RevisarFoto extends Component {    
  constructor(props){
    super(props)
    this.state = {              
        respuesta: '',
        Fotos: [],
    }
}


async componentDidMount(){

 await this.recuperar()
}

async recuperar(){

  try {
    
 
      const nameStorage = await 'gdsFotos' + this.props.navigation.state.params.idSala          
      var json = await AsyncStorage.getItem(nameStorage);
      const newFotos = await JSON.parse(json);  
      await this.setState(
        {
          Fotos: newFotos,
        }
      )
    //Alert.alert("recupero datos")

  } catch (error) {

    Alert.alert("Error recuperando Fotos", error.message)
  }
}

  
 OnBotonYes(){

       var uri =  this.props.navigation.state.params.imgPath;
       const idSala =  this.props.navigation.state.params.idSala
       const descSala =  this.props.navigation.state.params.descSala
       const idZona =  this.props.navigation.state.params.idZona
       const descZona =  this.props.navigation.state.params.descZona
       const nameStorage =  'gdsFotos' + idSala  
       var fecha = new Date();
       var fechahora = fecha.getUTCFullYear() + '-' +
               ('00' + (fecha.getUTCMonth() + 1)).slice(-2) + '-' +
               ('00' + fecha.getUTCDate()).slice(-2) + ' ' +
               ('00' + fecha.getUTCHours()).slice(-2) + '_' +
               ('00' + fecha.getUTCMinutes()).slice(-2) + '_' +
               ('00' + fecha.getUTCSeconds()).slice(-2);   
      var fechaCarpeta = fecha.getUTCFullYear() + '-' +
               ('00' + (fecha.getUTCMonth() + 1)).slice(-2) + '-' +
               ('00' + fecha.getUTCDate()).slice(-2);


       if (this.state.Fotos== null)
       {
        const newFotos =  [
          {  
            uri: uri,
            idSala: idSala,
            descSala: descSala,
            fecha: fechahora,
            descZona: descZona,
            fechaCarpeta: fechaCarpeta,
          }
        ]
        AsyncStorage.setItem(nameStorage,  JSON.stringify(newFotos));
        }
        else{
          const newFotos =  [
            ... this.state.Fotos,
            {  
              uri: uri,
              idSala: idSala,
              descSala: descSala,
              fecha: fechahora,
              descZona: descZona,
              fechaCarpeta: fechaCarpeta,
            }
          ]
    
          AsyncStorage.setItem(nameStorage,  JSON.stringify(newFotos));
        }



     
      this.props.navigation.navigate("SalasMenu",{idSala: idSala,descSala: descSala, idZona: idZona, descZona: descZona});
 
}





OnBotonNo(){
this.props.navigation.goBack()
}


  render() {

    const imgPath = this.props.navigation.state.params.imgPath;
    return (

  

         
            

     <View style={styles.container}>  

      <View style={styles.foto}>            
          <Image source={{uri: imgPath}} resizeMode="cover"  style={styles.canvas}  />   
      </View>
      <View style={styles.aceptar} >
    

        <View style={styles.row}>        
                <TouchableOpacity style={styles.buton}
                  onPress={()=>{this.OnBotonYes()}} >
                    <Circle name="check-circle" size={70} color="#34495E" />
                </TouchableOpacity>  

          <TouchableOpacity style={styles.buton}
                onPress={()=>{this.OnBotonNo()}} >
                  <Circle name="times-circle" size={70} color="#D35400" />
              </TouchableOpacity>  
          </View> 
    </View>
                            
      </View>
             
             
     

      
      
    );
  }
 
}



const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#F8F1ED',
      alignItems: "center",
      },
      row: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',           
        marginHorizontal: 5, 
        marginTop: 5,   
        paddingHorizontal: 5,
        borderRadius: 5,    
        paddingVertical: 10,
      },
      buton: { 
             
        justifyContent: 'space-between',
        alignItems: 'center',                  
        marginHorizontal: 50, 
        marginTop: 5,   
        paddingHorizontal: 5,
        borderRadius: 20,    
        paddingVertical: 10,
      },
      title: {
        fontSize: 20,
        flex: 0.3,  
      },
      foto: {
        flex: 3,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
      },
      canvas: {
        position: 'absolute',
        top: 10,
        left: 0,
        bottom: 0,
        right: 0,
      },
      aceptar: {
        flex: 1,
      }
      
      
});