import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { colores, styles } from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <TouchableIcon iconName="airplane-outline" />
      <TouchableIcon iconName="american-football-outline" />
      <TouchableIcon iconName="bonfire-outline" />
    </View>
  );
};
