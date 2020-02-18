
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from 'react-native';


import Entypo from 'react-native-vector-icons/Entypo';

export default class SalasMenu extends Component {   
  constructor(props){
    super(props)
    this.state = {                
      dsFotos: [], 
      cantidad: null,
    }    
  } 



  async componentDidMount() {

    const nameStorage = await 'gdsFotos' + this.props.navigation.state.params.idSala          
    var json = await AsyncStorage.getItem(nameStorage);
    const newsFotos = await JSON.parse(json);  

    try {
      var cantidad =  newsFotos.length
    } catch (error) {

      Alert.alert("Error de Conexion", error.message)
    }

    

    await this.setState({dsFotos: newsFotos, cantidad: cantidad})
      
  }



  

  onRefresh(){
    Alert.alert("paso por refres")
  }  



  render()   {
    const idSala = this.props.navigation.state.params.idSala
    const descSala = this.props.navigation.state.params.descSala
    const idZona = this.props.navigation.state.params.idZona
    const descZona = this.props.navigation.state.params.descZona
    return (
      <View style={styles.container}>  
           <View style={{flexDirection: 'row', backgroundColor: '#283747', padding:10}}> 
            <View style={{flex: 1, alignItems: 'center'}}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Salas", {idZona: idZona, descZona: descZona})}} >            
                <Entypo name="save" size={30} color="#fff" style={styles.shadowSave} />
              </TouchableOpacity>
            </View>
       
          <View style={{flex: 4, alignItems: 'center'}}>
            <Text  style={{  color:"#fff", fontSize: 20}}>{descSala}</Text>
          </View>
          </View>    
                             
          <View style={styles.view_boton}>
            <TouchableOpacity style={styles.view_boton}
                  onPress={()=>{this.props.navigation.navigate("TomarFoto", {idSala: idSala,descSala: descSala, idZona: idZona, descZona: descZona})}} >            
                
                  <View style={styles.view_titlePreguntas}>
                    <Text style={styles.text}> Toma de Fotos  </Text>                  
                  </View>
                  <View style={styles.view_subtitle}>
                        
                        <View style={styles.view_subtitle_presencia}>
                            <Text style={styles.subtext}> Cantidad de Fotos   </Text> 
                            <Text style={styles.subtextporcentaje}> {this.state.cantidad} </Text> 
                        </View>                        
                  </View>
            </TouchableOpacity>      
            </View>   


            <View style={styles.view_boton}>
            <TouchableOpacity style={styles.view_boton} 
             onPress={()=>{this.props.navigation.navigate("Send", {idSala: idSala,descSala: descSala, idZona: idZona, descZona: descZona})}} >
                  <View style={styles.view_enviar}>
                    <Text style={styles.text}> Enviar Fotos </Text>                  
                  </View>
                  <View style={styles.view_subtitle}>
                        
                        <View style={styles.view_subtitle_presencia}>
                            <Text style={styles.subtext}> Acceder para enviar  </Text>                             
                        </View>                        
                  </View>
                  </TouchableOpacity>  
            </View>   
            

      </View>
    );
  }
 
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
    },
  view_boton: {
    flex: 1,     
    marginHorizontal: 30,
    margin: 20,
    flexDirection: 'column',  
    backgroundColor: '#FFF',       
    },
  view_title: {       
    flex: 1, 
    flexDirection: 'column',  
    backgroundColor: '#5DADE2',           
    borderTopLeftRadius: 5,        
    borderTopRightRadius: 5,   
    padding: 5,     
    },
    view_titlePreguntas: {       
      flex: 1, 
      flexDirection: 'column',  
      backgroundColor: '#E67E22',           
      borderTopLeftRadius: 5,        
      borderTopRightRadius: 5,   
      padding: 5,     
      },
    view_subtitle: {       
      flex: 2, 
      flexDirection: 'row',  
      backgroundColor: '#E5E8E8',           
      borderBottomLeftRadius: 5,        
      borderBottomRightRadius: 5,        
      padding: 10,  
      },
    text: {      
      fontSize: 20,      
      color:  "#fff"
     },
     subtextporcentaje: {
      fontSize: 40, 
     },

     title: {
      fontSize: 40,
      textAlign: 'center'  ,
      color:  "#fff"
     },
     view_enviar: {
      flex: 1, 
      flexDirection: 'column',  
      backgroundColor: '#707B7C',           
      borderTopLeftRadius: 5,        
      borderTopRightRadius: 5,   
      padding: 5,   
     },
     subtext: {      
      fontSize: 12,      
      color:  "#717D7E",
      fontStyle: 'italic'
     },
     separador: {
       fontSize: 50
     },    
     view_subtitle_presencia: {flex: 1, alignItems: 'center'},
     view_subtitle_precio: {flex: 1,  alignItems: 'center'},
     shadowSave: {
      shadowColor: 'black',
      shadowOpacity: 0.5,
      shadowRadius: 5,
      shadowOffset: {
        width: 2,
        height: 2,}
      
    },
});