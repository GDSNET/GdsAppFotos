import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  ListView,
  Alert,
  TouchableOpacity,  
  FlatList,  
  AsyncStorage,
  TextInput,  
  Image
} from 'react-native';
import { PermissionsAndroid } from 'react-native';

import LogOut from 'react-native-vector-icons/MaterialCommunityIcons';



export default class Zonas extends Component {    
  constructor(props){
    super(props)   
    this.state = {            
      dsZonas: [],        
    }    
  } 

  async componentDidMount() {    

    
    await fetch('http://traolcl.gdsnet.com:8500/api/Fotos/getfotozona', 
    {method: 'GET',})
    .then((response) => {
      return response.json()})
    .then((datajsonsala) => {        
      this.setState({ 
        dsZonas: datajsonsala,          
      })
    });

 

    await this.requestCameraPermission();
    await this.requestStoragePermission();
    await this.requestStorageExternalPermission();


    }

    async eliminarUsuario(){
      const nameStorage =  'UserLogin'; 
      await AsyncStorage.removeItem(nameStorage);
      await this.props.navigation.navigate('Login');

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
      } catch (err) {
        console.warn(err)
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
      } catch (err) {
        console.warn(err)
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
    } catch (err) {
      console.warn(err)
    }
   
  }

    filterSearch(text){
      const newData = this.state.dsZonas.filter(function(item){
         const itemData = item.desc_zona.toUpperCase() 
         const textData = text.toUpperCase()
         return itemData.indexOf(textData) > -1

      })

      this.setState({
        dsZonas: newData
      })     

    }   



  loadSalas(dsZonas){

var colorView = ""    
if (dsZonas.f_visualizacion == "0")
{colorView = "#566573"}
else if (dsZonas.f_visualizacion == "1")
{colorView = "#E67E22"}
else{colorView = "#AEB6BF"}

return (




<TouchableOpacity style={styles.view_boton}
      onPress={()=>{this.props.navigation.navigate('Salas', {idZona: dsZonas.id_zona, descZona: dsZonas.desc_zona})}} >                   
    
      <View style={styles.view_title}>
        <Text style={styles.text}>  </Text>   
                      
      </View>
      <View style={styles.view_subtitle}>            
        <Text style={styles.subtext}> {dsZonas.desc_zona} </Text>                                         
      </View>
      
</TouchableOpacity>      





          ) 
    }





    


  render(){
    return(
      
      <View style={styles.container}> 
      
          <View style={{flexDirection: 'row', backgroundColor: '#FFF', padding:5}}> 
            <View style={{flex: 5}}>
              
               <Image 
                style={{width: 100, height:50, marginTop:10 }}
                source={require('../images/gds.png')} />
          
            </View>
            <View style={{flex: 1, alignItems: 'center', padding: 10}}>
            <TouchableOpacity onPress={()=>this.eliminarUsuario()} >            
                <LogOut name="logout" size={40} color="#34495E" style={styles.shadowSave} />
              </TouchableOpacity>
           </View>

           </View>
       
      

          <View style={{flexDirection: 'row'}}>          
    
            <View  style={{flex:1, alignItems: 'center'}}>
                <TextInput onChangeText={(text) => this.filterSearch(text)}
                 style = {styles.input}
                 keyboardType='email-address' 
                 autoCorrect={false}
                 placeholder=' Buscar... '
                 placeholderTextColor='rgba(225,225,225,0.7)'/>
         </View>
          </View> 
       
        <FlatList            
          data={this.state.dsZonas.sort(function(a, b){
            if(a.desc_zona < b.desc_zona) return -1;
            if(a.desc_zona > b.desc_zona) return 1;
            return 0})}
          extraData={this.state}
          keyExtractor={(item, index) => "" + item.id_zona}
          renderItem={({item}) => this.loadSalas(item)}
        />
      </View>      
      
    );
  }
 
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9F9' 
  },
  view: {
    paddingTop: 30,
   },
   text: {    
    fontSize: 15,
    textAlign: 'left'  ,
    color:  "#fff",
    padding: 3
   },
   subtext: {
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'left'  ,
    color:  "#666",
    padding: 5
   },
   separator: {
    flex: 1, 
    borderWidth: 1, 
    borderColor: 'red'
   },
   row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',    
    backgroundColor: '#566573',    
    marginHorizontal: 5, 
    marginTop: 5,   
    paddingHorizontal: 5,
    borderRadius: 5,    
    paddingVertical: 10,
  },
  list: {
    marginTop: 5
  },
  view_boton: {
    flex: 0.5,     
    marginHorizontal: 15,
    marginTop: 8,
    flexDirection: 'column',  
    backgroundColor: '#FFF',  
         
    },
  view_title: {       
    flex: 1, 
    flexDirection: 'column',  
    backgroundColor: '#2E86C1',           
    borderTopLeftRadius: 5,        
    borderTopRightRadius: 5,   
    padding: 2,     
    },
    view_subtitle: {       
      flex: 3, 
      flexDirection: 'row',  
      backgroundColor: '#D4E6F1',           
      borderBottomLeftRadius: 5,        
      borderBottomRightRadius: 5,        
      padding: 10,  
      
      },
      input:{
        height: 40,
        width: 250,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        margin: 10,
        alignItems: 'center',
        textAlign: 'center',
        color: '#666'
        },
        

});
