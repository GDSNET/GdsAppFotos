import React, { Component } from 'react';
import {
  Text,
  View, 
  Alert,
  TouchableOpacity,
  Image,

} from 'react-native';
import stylesimport from '../styles/HeaderSecStyle'
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const styles = stylesimport



export default class Indice extends Component {    


async componentDidMount() {    

//Alert.alert("Inicio");

}


funVolver(){
  this.props.navigation.goBack();
}

  render(){
    return(
      <View style={styles.container}> 
    
          <TouchableOpacity onPress={()=>this.funVolver()}   >  
          <View style={styles.salida}>             
               <Icon name='arrow-left' size={25} style={styles.activeBorderColor} />
          </View> 
            </TouchableOpacity>
            

          <View style={styles.texto}> 
          <Text adjustsFontSizeToFit={true} numberOfLines={2} style={styles.textHeader}>{this.props.descTitulo}</Text>
          </View>      

          <View style={styles.logo}> 
          <Image 
                    style={{width: 50, height:30}}
                    source={require('../images/gds.png')} />
         </View>      
      </View>      
      
    );
  }
 
}



