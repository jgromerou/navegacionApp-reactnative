import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';

export default function App() {
  return (
    <NavigationContainer>
      {/* <MenuLateralBasico /> */}
      <MenuLateral />
    </NavigationContainer>
  );
}
