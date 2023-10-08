import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';

export const PersonaScreen = ({ route, navigation }) => {
  // console.log(route);
  const params = route.params;

  const{changeUsername}=useContext(AuthContext)

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  useEffect(() => {
    changeUsername(params.nombre)
  }, [])
  

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(route.params, null, 3)}</Text>
    </View>
  );
};
