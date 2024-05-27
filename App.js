import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen.jsx';
import CadastroScreen from './src/screens/CadastroScreen.jsx';
import HomeScreen from './src/screens/HomeScreen.jsx';
import DetalhesFilmeScreen from './src/screens/DetalhesFilmeScreen.jsx';

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
         <Stack.Screen name='Cadastro' component={ CadastroScreen } options={{
          title: 'Cadastro do Usuário',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: "#B81D24" },
          headerTitleStyle: {fontWeight: "bold" }
         }}/>
         <Stack.Screen name="Homescreen" component={ HomeScreen} options={{
          title: 'Página Principal',
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#B81D24" },
          headerTitleStyle: {fontWeight: "bold" }
         }} />
          <Stack.Screen name="DetalhesFilme" component={ DetalhesFilmeScreen } options={{
            title: "Detalhes do Filme",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#B81D24" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}