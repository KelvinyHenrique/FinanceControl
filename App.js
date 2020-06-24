import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './src/navigators/MainTab';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
       <MainTab/>
    </NavigationContainer>
  );
};

export default App;
