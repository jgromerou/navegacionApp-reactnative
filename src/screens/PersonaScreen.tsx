import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../themes/appTheme';

export const PersonaScreen = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.nombre,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(route.params, null, 3)}</Text>
    </View>
  );
};
