
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';


import Camera from 'react-native-camera';
import Circle from 'react-native-vector-icons/FontAwesome';
import Photo from 'react-native-vector-icons/MaterialIcons';


export default class TomarFoto extends Component {
  constructor(props){
    super(props);
    this.state = {
      avatarSource: null,
      data: null,
      path: null,
    }
  }

  async takePicture() {   
    var resposnse = await this.camera.capture();
    var path = await resposnse.path;   
    await this.setState({path: path});

    const idSala = this.props.navigation.state.params.idSala
    const descSala = this.props.navigation.state.params.descSala
    const idZona =  this.props.navigation.state.params.idZona
    const descZona =  this.props.navigation.state.params.descZona
    await this.props.navigation.navigate("RevisarFoto",{idSala: idSala,descSala: descSala, imgPath: path,idZona: idZona, descZona: descZona});
 
  }



  render() {
    const respuesta = "";
    return (
   

        <View style={styles.container}>
          <Camera 
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            Aspect={Camera.constants.Aspect.fill}
            captureQuality="720p"
            captureTarget={Camera.constants.CaptureTarget.disk}>
          </Camera>

          

         <TouchableOpacity onPress={this.takePicture.bind(this)} style={{backgroundColor: "#000", alignItems: "center", padding: 10}}  >              
         <Photo name="photo-camera" size={50} color="#FFFFFF" />
        </TouchableOpacity>
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
},
});