/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import Login from './Components/Login';
import Register from './Components/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import signUpRegisterHandler from './Components/signUpRegisterHandler';
import Posts from './Components/Posts';
import Card from './Components/Card';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="MainScreen" component={Posts}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

