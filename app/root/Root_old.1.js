import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import StyleSheet from 'react-native'

import Salas from '../componentes/Salas';
import Zonas from '../componentes/Zonas';
import Glosario from '../glosario/Glosario';
import SalasMenu from '../componentes/SalasMenu';
import TomarFoto from '../componentes/TomarFoto';
import RevisarFoto from '../componentes/RevisarFoto';
import Icon from 'react-native-vector-icons/Entypo';
import Login from '../login/Login'
import Send from '../send/Send'
import Sending from '../send/Sending'
import { Platform } from 'react-native';

const tintColor = "#FFF"

export const ContenedorResumen = StackNavigator({
 
  Zonas: {
    screen: Zonas,
    navigationOptions: {
      header: null,
      
    },
  }, 
  Salas: {
    screen: Salas,
    navigationOptions: {
      header: null,
      
    },
  },
  SalasMenu: {
    screen: SalasMenu,
    navigationOptions: {  
      header: null,          
    },  
  },  
  TomarFoto: {
    screen: TomarFoto,   
    navigationOptions: {
      header: null,      
    }
  },  
  RevisarFoto: {
    screen: RevisarFoto,   
    navigationOptions: {
      header: null,      
    }
  },    
  Send: {
    screen: Send,   
    navigationOptions: {
      header: null,      
    }
  }, 
  Sending: {
    screen: Sending,   
    navigationOptions: {
      header: null,      
    }
  }, 
},
{    
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#283747',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 20,
      alignContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      
    },
  }
}
);











export const ContenedorGlosario = StackNavigator({
  Glosario: {
    screen: Glosario,
    navigationOptions: {
      title: 'Glosario',      
    },
  },  
},{    
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#F8F9F9',
    },
    headerTintColor: '#888',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});



export const ContenedorLogin = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,     
    },
  },  

});

export const Tabs = TabNavigator({
  Screen1: {
    screen: ContenedorLogin,
  },
  Screen2: {
    screen: ContenedorResumen,
    navigationOptions: {
      tabBarLabel: 'Salas',
      tabBarIcon: ({ tintColor }) => <Icon name='home' size={26} style={{ color: tintColor }} />
    },
  },
  Screen3: {
    screen: ContenedorGlosario,
    navigationOptions: {
      tabBarLabel: 'Glosario',
      tabBarIcon: ({ tintColor }) => <Icon name='book' size={26} style={{ color: tintColor }} />
    },
  },

}, {
    headerMode: 'none',        // I don't want a NavBar at top
    tabBarPosition: 'bottom',  // So your Android tabs go bottom
    tabBarOptions: {
      activeTintColor: '#E67E22',  // Color of tab when pressed
      inactiveTintColor: '#FFF', // Color of tab when not pressed
      showIcon: 'true', // Shows an icon for both iOS and Android
      showLabel: (Platform.OS !== 'android'), //No label for Android
      labelStyle: {
        fontSize: 11,
      },
      style: {
        backgroundColor: '#34495E', // Makes Android tab bar white instead of standard blue
        height: (Platform.OS === 'ios') ? 48 : 50 // I didn't use this in my app, so the numbers may be off. 
      }
    },
});


export const Root = StackNavigator({
  Tabs: {
    screen: Login,
    screen: Tabs,
  }, 
}, 

{
  mode: 'card',
  headerMode: 'none',
}
 );


