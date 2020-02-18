import React, { Component } from 'react';
import {
  Text,
  View, 
  Alert,
  Picker,
  AsyncStorage

} from 'react-native';
import stylesimport from '../styles/SalaCapturaStyle'
import ISalaCapturaCam from './ISalaCapturaCam'
import HeadersSec from './HeadersSec'
const styles = stylesimport



export default class ISalaCaptura extends Component {    
  constructor(props){
    super(props)   
    this.state = {            
      id_categoria: '',
      desc_categoria: '',
      id_tarea: '0',
      descTitulo: 0,
      


    }    

    this.funContarFotos = this.funContarFotos.bind(this);
  } 

  componentDidMount(){
    this.funContarFotos();
  }

  async funContarFotos(){


  var sala = this.props.navigation.state.params.item.id_sala  
  const nameStorage = await 'gdsFotos' +  sala;
  var json = await AsyncStorage.getItem(nameStorage);
  const newFotos = await JSON.parse(json); 
  var cantidad = newFotos.length;
  await this.setState(
    {
      descTitulo: cantidad
    }
  )
    
  }


  funactiveCamera(){
    if (this.state.id_tarea=='0'){
      return(<Text style={styles.textoAlerta}>Seleccione Categoria</Text>)
    }
    else{
     return(  <ISalaCapturaCam
     funContarFotos={this.funContarFotos}
     navigation={this.props.navigation}
     id_sala={this.props.navigation.state.params.item.id_sala}
     id_tarea={this.state.id_tarea}
     items={this.props.navigation.state.params.item.categoria}
     
     /> )
    }

  }




  render(){
    return(
      // este codigo recibe el valor en props de la api, es llamada por texto
      <View style={styles.container}> 
 <HeadersSec 
              navigation= {this.props.navigation}
              descTitulo= {this.state.descTitulo}/>

          <View style={styles.camara}> 
              {this.funactiveCamera()}
          </View>
          <Picker
              mode="dropdown"
              onValueChange={id_tarea => {
              this.setState({id_tarea: id_tarea, 
                })
            }}
           selectedValue={this.state.id_tarea}
>
<Picker.Item label="Seleccione Categoria" value="0" key="0" ></Picker.Item>

    {this.props.navigation.state.params.item.categoria.map((item, i) => {
        return (<Picker.Item label={item.desc_categoria} value={item.id_tarea}  key={i}/>) 
    })}
</Picker>

      </View>   
    
      
    );
  }
 
}



