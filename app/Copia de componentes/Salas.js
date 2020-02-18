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




import Entypo from 'react-native-vector-icons/Entypo';



export default class Salas extends Component {    
  constructor(props){
    super(props)   

    this.state = {            
      dsSalas: [],        
    }    
  } 

  componentDidMount() {    
    var idZona = this.props.navigation.state.params.idZona;

 
    fetch(`http://traolcl.gdsnet.com:8500/api/Fotos/getfotosalas/`+idZona, 
    {method: 'GET',})
    .then((response) => {
      return response.json()})
    .then((datajsonsala) => {        
      this.setState({ 
        dsSalas: datajsonsala,          
      })
    });

  
    }


    filterSearch(text){
      const newData = this.state.dsSalas.filter(function(item){
         const itemData = item.direccion.toUpperCase() 
         const textData = text.toUpperCase()
         return itemData.indexOf(textData) > -1

      })

      this.setState({
        dsSalas: newData
      })     

    }   



loadSalas(dsSalas){
 
  const idZona = this.props.navigation.state.params.idZona;
  const descZona = this.props.navigation.state.params.descZona;

return (


<TouchableOpacity style={styles.view_boton}
      onPress={()=>{this.props.navigation.navigate('SalasMenu', {idZona: idZona,descZona: descZona, idSala: dsSalas.id_pto, descSala: dsSalas.direccion})}} >                   
    
      <View style={styles.view_title}>
        <Text style={styles.text}> {dsSalas.direccion} </Text>                  
      </View>
      <View style={styles.view_subtitle}>            
        <Text style={styles.subtext}> Pendiente </Text>                                         
      </View>
</TouchableOpacity>      





          ) 
    }





    


  render(){
  

    const descZona = this.props.navigation.state.params.descZona;
    return(

      

      
      <View style={styles.container}> 


     <View style={{flexDirection: 'row', backgroundColor: '#283747', padding:10}}> 
            <View style={{flex: 1, alignItems: 'center'}}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Zonas")}} >            
                <Entypo name="save" size={30} color="#fff" style={styles.shadowSave} />
              </TouchableOpacity>
            </View>
       
          <View style={{flex: 4, alignItems: 'center'}}>
            <Text  style={{  color:"#fff", fontSize: 20}}>{descZona}</Text>
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
          data={this.state.dsSalas}
          extraData={this.state}
          keyExtractor={(item, index) => "" + item.id_pto}
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
