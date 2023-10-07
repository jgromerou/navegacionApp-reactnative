import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../themes/appTheme';

export const SettingsScreen = () => {
  return (
    <View style={{ ...styles.globalMargin, marginTop: 10 }}>
      <Text style={styles.title}>SettingsScreen</Text>
    </View>
  );
};
