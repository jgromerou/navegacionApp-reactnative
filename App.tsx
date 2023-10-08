import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
// import { Tabs } from './src/navigator/Tabs';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};