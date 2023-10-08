import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
// import { Tab2Screen } from '../screens/Tab2Screen';
// import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../themes/appTheme';
import {Platform, Text} from 'react-native'
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {

  return Platform.OS === 'ios'
          ? <TabsIOS />
          : <TabsAndroid />
};

// BottomTabs Material para Android
const BottomTabAndroid = createMaterialBottomTabNavigator();

const  TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{
        backgroundColor: colores.primary,
      }}
      screenOptions={ ({route})=> ({
        tabBarIcon: (props) => {
          let iconName = '';
          switch(route.name) {
              case 'Tab1Screen' :
                  iconName = 'basketball-outline'
              break;

              case 'TopTabNavigator' :
                  iconName = 'barbell-outline'
              break;

              case 'StackNavigator' :
                  iconName = 'game-controller-outline'
              break;
          }
          // return <Text style={{color: props.color}}>{ iconName }</Text>
          return <Icon name={iconName} size={25} color={props.color} />
      }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{title: 'TopTab'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

// BottomTabs para IOS
const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      
      screenOptions={ ({route})=> ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          //borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: (props) => {
          let iconName = '';
          switch(route.name) {
              case 'Tab1Screen' :
                  iconName = 'basketball-outline'
              break;

              case 'TopTabNavigator' :
                  iconName = 'barbell-outline'
              break;

              case 'StackNavigator' :
                  iconName = 'game-controller-outline'
              break;
          }
          // return <Text style={{color: props.color}}>{ iconName }</Text>
          return <Icon name={iconName} size={20} color={props.color} />
      }
      })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tab1', tabBarIcon: (props)=><Text style={{color: props.color}}>T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{title: 'TopTab'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
};

