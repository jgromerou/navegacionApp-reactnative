import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { colores, styles } from '../themes/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      {/* Contenedor del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de Menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{...styles.menuBoton,
              flexDirection: 'row'
          }}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Icon name='compass-outline' size={25} color={colores.primary} />
          <Text style={styles.menuTexto}> Navegación Tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.menuBoton,
            flexDirection: 'row'
        }}
        >
          <Icon name='cog-outline' size={25} color={colores.primary} />
          <Text
            style={styles.menuTexto}
            onPress={() => navigation.navigate('SettingsScreen')}
          > Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
