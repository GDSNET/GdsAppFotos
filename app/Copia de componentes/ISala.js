import React, { Component } from 'react';
import {
  Text,
  View, 
  Alert,
  ActivityIndicator,
  AsyncStorage,
  

} from 'react-native';
import stylesimport from '../styles/IndiceStyle'
const styles = stylesimport
import Header from './Header'
import Buscador from './Buscador'
import Cuerpo from './ISalaCuerpo'
import apiSala from '../api/apiSalas'
import { PermissionsAndroid } from 'react-native';


export default class ISala extends Component {  
  
  // en el constructor recibo el titulo de la pagina principal en una variable
  // recibo api y se guarda en una variable

  constructor(props){
    super(props)   
    this.state = {            
      descTitulo: '',
      dsSalas: [],
      value: '',   
      dsSalas: [],
      isLoading: true,
      count: '',
      dsSalasresp: [],

    }   
    
    this.filterSearch = this.filterSearch.bind(this);
  } 

  async componentDidMount() {
    await this.requestCameraPermission();
    await this.requestStoragePermission();
    await this.requestStorageExternalPermission();
    await this.postDatosSalas();
//Alert.alert("Inicio");

}





async postDatosSalas(){

  const nameStorage = await 'usuarios';
  var json = await AsyncStorage.getItem(nameStorage);
  var newRelevo = await JSON.parse(json);

  
  if (newRelevo !== null) {
   //Alert.alert("ENTRO AL SI", newRelevo[0].Usuario_Id);
  }

 var Usuario_id = await newRelevo[0].Usuario_Id;
 var descTitulo = await newRelevo[0].Usuario_Id + ' - ' + newRelevo[0].Usuario_Nombre ;
 this.setState({descTitulo: descTitulo })



  await fetch('http://traolcl.gdsnet.com:8500/api/FotosPro/postSalaCategoria', 
  {method: 'POST',  
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify( {          
    Usuario_id: Usuario_id,
  })
})
  .then((response) => {
    return response.json()})
  .then((datajsonsala) => {      
    
    //alert (JSON.stringify(datajsonsala))
    this.setState({ 
      dsSalas: datajsonsala,  
      dsSalasresp: datajsonsala, 
      isLoading: false  
    })
  });

}


filterSearch(text){
  
  let dsBuscar= this.state.dsSalasresp;
  
         const newData = dsBuscar.filter(function(item){
         const itemData = item.desc_sala.toUpperCase() 
         const textData = text.toUpperCase()
         return itemData.indexOf(textData) > -1
  
      })
  
      this.setState({
        dsSalas: newData
      })     
  
    } 




async  requestStoragePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        'title': 'Cool Photo App Camera Permission',
        'message': 'Cool Photo App needs access to your camera ' +
                   'so you can take awesome pictures.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera")
    } else {
      console.log("Camera permission denied")
    }
  } catch (error) {

    Alert.alert("Error de Request", error.message)
  }
}


async  requestStorageExternalPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        'title': 'Cool Photo App Camera Permission',
        'message': 'Cool Photo App needs access to your camera ' +
                   'so you can take awesome pictures.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera")
    } else {
      console.log("Camera permission denied")
    }
  } catch (error) {

    Alert.alert("Error de request", error.message)
  }
}


async  requestCameraPermission() {

try {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
    {
      'title': 'Cool Photo App Camera Permission',
      'message': 'Cool Photo App needs access to your camera ' +
                 'so you can take awesome pictures.'
    }
  )
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log("You can use the camera")
  } else {
    console.log("Camera permission denied")
  }
} catch (error) {

  Alert.alert("Error de request", error.message)
}

}
// aqui en cada view recibe cada hoja que se va creando para armar una principal
// en el view de cuerpo se envia la sala atraves de la variable
// se agrega el navigation para poder viajar entre las vistas
  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1,  flexDirection: 'row',
        justifyContent: 'space-around',size: 'large', color: "#0000ff",
        padding: 10, }}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.container}>
          <View style={styles.header}>
          <Header 
          descTitulo= {this.state.descTitulo}
          navigation={this.props.navigation}
          />
          
          </View>  
          <View style={styles.buscador}> 
          <Buscador 
                filterSearch={this.filterSearch} />
          </View>  
          <View style={styles.cuerpo}> 
            <Cuerpo apiSala={this.state.dsSalas}
                    navigation={this.props.navigation}
            />
          </View>  

      </View>      
      
    );
  }
 
}



