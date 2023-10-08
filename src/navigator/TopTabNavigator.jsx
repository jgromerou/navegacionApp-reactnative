import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import {Text} from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../themes/appTheme';
import  Icon  from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

// En caso de que haya un error en IOS de Sending agregar estas dos lineas (no es recomendable)
// import {LogBox} from 'react-native';
// LogBox.ignoreLogs(['Sending']);

export const TopTabNavigator = () => {

// const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
    
        // style={{
        //    paddingTop: top 
        // }}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={ ({route})=> ({
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
                backgroundColor: colores.primary
            },
            tabBarStyle: {
                //borderTopColor: colores.primary,
                shadowColor: 'transparent',
                elevation: 0,
            },
            tabBarIcon: (props) => {
              let iconName = '';
              switch(route.name) {
                  case 'Chat' :
                      iconName = 'chatbox-ellipses-outline'
                  break;
    
                  case 'Contacts' :
                      iconName = 'people-outline'
                  break;
    
                  case 'Albums' :
                      iconName = 'albums-outline'
                  break;
              }
              return <Icon name={iconName} size={25} color={props.color} />
          }
          })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
