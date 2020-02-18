import React from 'react';
import { TabNavigator, StackNavigator,SwitchNavigator } from 'react-navigation';



import Glosario from '../glosario/Glosario';
import ISala from '../componentes/ISala';
import ISalaMenu from '../componentes/ISalaMenu';
import ISalaCaptura from '../componentes/ISalaCaptura';
import ISalaMenuFoto from '../componentes/ISalaMenuFoto';
import Icon from 'react-native-vector-icons/Entypo';
import Login from '../login/Login'
import Send from '../send/Send'
import Sending from '../send/Sending'
import { Platform } from 'react-native';


export const ContenedorResumen = StackNavigator({
  ISala: {
    screen: ISala,
    navigationOptions: {
      header: null,
      
    },
  }, 
  ISalaMenu: {
    screen: ISalaMenu,
    navigationOptions: {
      header: null,
    },
  }, 
  ISalaMenuFoto: {
    screen: ISalaMenuFoto,
    navigationOptions: {
      header: null,
    },
  }, 
  ISalaCaptura: {
    screen: ISalaCaptura,
    navigationOptions: {
      header: null,
      tabBarVisible: false,
    },
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
      title: 'Limpiar',      
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
    screen: ContenedorResumen,
    navigationOptions: {
      tabBarLabel: 'Salas',
      tabBarIcon: ({ tintColor }) => <Icon name='home' size={26} style={{ color: tintColor }} />
    },
  },
  Screen2: {
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


export const Root = SwitchNavigator({
  Login: {
    screen: Login,
  }, 
  Tabs: {
    screen: Tabs,
  }
}, 

{
  mode: 'card',
  headerMode: 'none',
}
 );


