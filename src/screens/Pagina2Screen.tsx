import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { styles } from '../themes/appTheme';

export const Pagina2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atrás', // headerBackTitle: '' -> iria el valor atrás segun lenguaje del navegador
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>

      <Button
        title="Ir a la página 3"
        onPress={() => navigator.navigate('Pagina3Screen' as never)}
      />
    </View>
  );
};
