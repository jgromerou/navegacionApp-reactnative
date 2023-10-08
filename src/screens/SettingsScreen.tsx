import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { colores, styles } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const { authState } = useContext(AuthContext);

  return (
    <View style={{ ...styles.globalMargin, marginTop: 10 }}>
      <Text style={styles.title}>SettingsScreen</Text>

      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {
        authState.favoriteIcon && (
          <Icon 
            name={authState.favoriteIcon}
            size={150}
            color={colores.primary}
          />
        )
      }
    </View>
  );
};
