import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen.jsx';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} options={{ 
          title: 'Login do Usuário',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: "#B81D24" },
          headerTitleStyle: {fontWeight: "bold" }
         }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}