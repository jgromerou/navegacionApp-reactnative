import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

export default function App() {
  return (
    <NavigationContainer>
      <MenuLateralBasico />
    </NavigationContainer>
  );
}
