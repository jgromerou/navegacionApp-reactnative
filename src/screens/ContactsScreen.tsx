import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

  const { signIn, authState:{ isLoggedIn } } = useContext(AuthContext)
  // const { isLoggedIn } = authState;

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactsScreen</Text>

      {
        !isLoggedIn && <Button title='SignIn' onPress={signIn} />
      }
    </View>
  );
};
