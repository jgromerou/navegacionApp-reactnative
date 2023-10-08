import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { colores, styles } from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Icon name="airplane-outline" size={30} color={colores.primary} />
      <Icon name="american-football-outline" size={30} color={colores.primary} />
      <Icon name="bonfire-outline" size={30} color={colores.primary} />

    </View>
  );
};
