import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {

  const { logout, authState:{ isLoggedIn } } = useContext(AuthContext)
  // Otra forma de traer isLoggedIn es:
  // const { isLoggedIn } = authState;

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumsScreen</Text>

      {
        isLoggedIn &&  <Button title='Logout' onPress={logout} />
      }
    </View>
  );
};