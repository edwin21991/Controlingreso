import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './src/components/Home/HomeStack';

const App = ()=> {
  return (
    <NavigationContainer>
      
        <HomeStack />
      
    </NavigationContainer>
  );
}

export default App
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
