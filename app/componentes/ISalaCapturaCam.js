
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  Text,
  AsyncStorage
} from 'react-native';


import Camera from 'react-native-camera';
import Photo from 'react-native-vector-icons/MaterialIcons';


export default class TomarFoto extends Component {
  constructor(props){
    super(props);
    this.state = {
      avatarSource: null,
      data: null,
      path: null,
      Fotos: null,
      desc_categoria: '',
      contador: 0,
    }
  }

  async componentDidMount(){
    await this.recuperar()
   }
   
   async recuperar(){
     try {
       
      const nameStorage = await 'gdsFotos' +  this.props.id_sala        
      var json = await AsyncStorage.getItem(nameStorage);
      const newFotos = await JSON.parse(json);  
         await this.setState(
           {
             Fotos: newFotos,
           }
         )
       //Alert.alert("recupero datos")
   
      } catch (error) {

        Alert.alert("Error Usuario no existe", error.message)
      }
      }

  

  async takePicture() {   
    var resposnse = await this.camera.capture();
    var path = await resposnse.path;   
    await this.setState({path: path});
    await this.fundescCategoria()
    await this.funGuardar(path);
    await this.props.funContarFotos();
  }

  async fundescCategoria(){
    var id_tarea = await this.props.id_tarea;
    var items = await this.props.items;

//Alert.alert("Tara a buscar: " + id_tarea);
//Alert.alert("Items Compartidos: " ,  JSON.stringify(items));

    var result = await  items.filter(function(item) {
      return item.id_tarea == id_tarea;
    });
    this.setState({
      desc_categoria: result[0].desc_categoria,
      contador: this.state.contador + 1,
    })
    
    
    }
    

  funGuardar(path){

    var uri =  path;
    var id_sala =  this.props.id_sala
    var id_tarea =  this.props.id_tarea
    var desc_categoria =  this.state.desc_categoria

    var nameStorage =  'gdsFotos' + id_sala  
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
         id_sala: id_sala,
         id_tarea: id_tarea,
         desc_categoria: desc_categoria,
         fecha: fechahora,
         fechaCarpeta: fechaCarpeta
       }
     ]
     this.setState({Fotos: newFotos})
     AsyncStorage.setItem(nameStorage,  JSON.stringify(newFotos));
  
     }
     else{
       const newFotos =  [
         ... this.state.Fotos,
         {  
          uri: uri,
          id_sala: id_sala,
          id_tarea: id_tarea,
          desc_categoria: desc_categoria,
          fecha: fechahora,
          fechaCarpeta: fechaCarpeta
         }
       ]
       this.setState({Fotos: newFotos})
       AsyncStorage.setItem(nameStorage,  JSON.stringify(newFotos));

     }

   

  }




  render() {
    
    return (


        <View style={styles.container}>
          <Camera 
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            Aspect={Camera.constants.Aspect.fill}
            captureQuality="720p"
            forceUpOrientation={true}
            playSoundOnCapture={false} 
            captureTarget={Camera.constants.CaptureTarget.disk}>
            <View style={{flex:8}} ></View>
            <View style={{flex:1}} >
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={{backgroundColor: "rgb(0, 0, 0 , 0.5)", alignItems: "center", paddingHorizontal: 50}}  >              
              <Photo name="photo-camera" size={50} color="#fff" />
            </TouchableOpacity>
            </View>
          </Camera>

        </View>  


      
      
    );
  }
 
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
},
preview: {
  flex: 1,
},  
actionButton: {
      position: 'absolute',
      bottom: 25,
      padding: 16,
      right: 20,
      left: 20,
      borderRadius: 20,
      alignItems: 'center',
},botones: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  backgroundColor: '#000',
  padding: 10,
}
});