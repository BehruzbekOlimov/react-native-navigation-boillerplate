import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './navigation/RootStackNavigator';
import { Provider as PaperProvider } from 'react-native-paper'
import AuthStackNavigator from './navigation/AuthStackNavigator';

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStackNavigator isLoggedIn={isLoggedIn} />
      </NavigationContainer>
    </PaperProvider>

  );
}