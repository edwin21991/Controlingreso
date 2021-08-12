import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './src/components/Home/HomeStack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native'

// const Tabs = createBottomTabNavigator()

const App = ()=> {
  return (
    <NavigationContainer>
{/* 
        <Tabs.Navigator style={styles.container}>
          <Tabs.Screen
            
            name='INICIO'
            component= {HomeStack}
            options={{
              tabBarIcon:({size, color})=>{
                
                <Image 
                  style={{tintColor: color, width: size, height: size}}
                  source={require('./src/assets/bank.png')} 
                />
              }
            }}
          />
        </Tabs.Navigator> */}

        <HomeStack />

    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     width:200
//   },
// });

export default App
