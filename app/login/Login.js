

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Alert

  
} from 'react-native';

import LogIn from 'react-native-vector-icons/MaterialCommunityIcons';




export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {  
      dsUser: [],
      Usuario_Id: '',
      Password: '',
      Usuario_Nombre: '',
      comentario: '',   
      fadeAnim: new Animated.Value(0),
      offsetX: new Animated.Value(3),
      
    }
  }


funcionAndimar(){


  Animated.timing(                  // Animate over time
    this.state.fadeAnim,            // The animated value to drive
    {
      toValue: 1,                   // Animate to opacity: 1 (opaque)
      duration: 2000, 
    }
  ).start(); 
  
  


  
}

 MoverTexto() {
  


    Animated.timing(
      this.state.offsetX,
      { toValue: -10,
        duration: 100 },
    ).start(() => {
      Animated.timing(
        this.state.offsetX,
        { toValue: 10,
          duration: 100 },
      ).start(()=> Animated.timing(
        this.state.offsetX,
        { toValue: 0,
          duration: 100 },
      ).start())
    });




}


  
async loginIn(){

  //await this.eliminarUsuario()
  //await this.primer_login();
  
  await this.postLogin();
  await this.validarInicio();
  await this.funcionAndimar();
  await this.MoverTexto();
  
  //await this.guardarUsuario();
  
  }

  async postLogin(){

try {
  
  await fetch('http://traolcl.gdsnet.com:8500/api/FotosPro/postmobilelogin', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    Usuario_Id: this.state.Usuario_Id,
    Password: this.state.Password})
  }).then((data) => {  
     // alert( JSON.stringify(data)) 
       this.setState({ 
        dsUser: JSON.parse(data._bodyInit) ,          
      })
     })
  
} catch (error) {

  Alert.alert("Error de Conexion", error.message)
}

       //Alert(content);
      }
  

      async validarInicio(){
        const user = await this.state.dsUser
        if (user.Usuario_Nombre == null){ 
        this.setState({ 
          comentario: 'Validar Usuario o Contraseña' ,          
        })
        await this.eliminarUsuario();
        }else
        {
          await this.eliminarUsuario();
          await this.guardarUsuario();
          await this.props.navigation.navigate('ISala');               
      
        }
        
      }
      
      async buscarUsuario(){
      const nameStorage = await 'usuarios'   
      var json = await AsyncStorage.getItem(nameStorage);
      var newLogin= await JSON.parse(json);  
      if (!Array.isArray(newLogin) || !newLogin.length)    
      {
       // alert("esta vacio")
      }
      else{
        this.setState({ 
          comentario: 'Bienvenido ' + newLogin[0].Usuario_Nombre ,          
        })
       await this.setState({ 
          dsUser: newLogin,   
          Usuario_Id: newLogin[0].Usuario_Id,
          Password: newLogin[0].Password,
          Usuario_Nombre: newLogin[0].Usuario_Nombre,
        })
      }
      
      }
       
      
      
      async guardarUsuario(){
        var newLogin = await this.state.dsUser
      
        const newUsers = await [
          {  
            Usuario_Id: newLogin.Usuario_Id,
            Password: newLogin.Password,
            Usuario_Nombre: newLogin.Usuario_Nombre,
          }
        ]
        await AsyncStorage.setItem('usuarios',  JSON.stringify(newUsers));
      
      
      }
      
       async eliminarUsuario(){
        const nameStorage =  'usuarios';
        await AsyncStorage.removeItem(nameStorage);
      
      
      }
      
    

  
async componentDidMount(){
  await this.funcionAndimar();
  await this.buscarUsuario();
  await this.postLogin();
  await this.validarInicio();
 }


 render(){
  let { fadeAnim } = this.state;

  

  return(
    <View style={styles.container}>      
       <View style={styles.viewimagen}>  

      

 
       


         <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >

   <Image 
              style={{width: 200, height:100, marginTop:100 }}
              source={require('../images/gds.png')} />


      </Animated.View>
       </View>

 <Animated.View style={{ transform: [{translateX: this.state.offsetX}] }}>
     
     
        <View style={styles.viewinput}>  
       

            <TextInput style = {styles.input} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.PasswordInput.focus()} 
                onChangeText={(Usuario_Id) => this.setState({ Usuario_Id })}
                autoCorrect={false} 
                keyboardType='email-address' 
                returnKeyType="next" 
                placeholder=' Usuario ' 
                placeholderTextColor='rgba(225,225,225,0.7)'/>

            <TextInput style = {styles.input}   
                  returnKeyType="go" 
                  onChangeText={(Password) => this.setState({ Password })}
                  ref={(input)=> this.PasswordInput = input} 
                  placeholder='Password' 
                  placeholderTextColor='rgba(225,225,225,0.7)' 
                  secureTextEntry/>


        </View>
        <View style={styles.viewicon}>  
        <TouchableOpacity onPress={()=>this.loginIn()} >            
          <LogIn name="logout" size={40} color="#567" style={styles.shadowSave} />
        </TouchableOpacity>
        
        </View>
        <Text>{this.state.comentario}</Text>
        <Text> Version 9.0 </Text>
        </Animated.View>
    </View>
  );
}
 
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',  
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
  },
  input:{
    height: 40,
    width: 150,
    backgroundColor: '#567',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    color: '#fff'
},
viewinput: {
  padding: 10,
  alignItems: 'center',
  alignSelf: 'center',
},
viewicon: {
  padding: 10,
  alignItems: 'center',
  alignSelf: 'center',
},
viewimagen: {
  padding: 10,
  alignItems: 'center',
  alignSelf: 'center',
},
});

