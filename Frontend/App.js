/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import Login from './Screens/Login.js';
import Categories from './Screens/Categories.js';
import Register from './Screens/Register.js';
import Profile from './Screens/Profile.js';
import Main from './Screens/Main.js';
import Posts from './Screens/Posts.js';
import {createStackNavigator} from '@react-navigation/stack';
import Playground from './Screens/Playground.js';
import BottomNavBar from './Components/BottomNavBar.js';
import TopBar from './Components/TopBar.js';
import {NavigationContainer, StackActions} from '@react-navigation/native';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="TopBar" component={TopBar} />
          <Stack.Screen name="BottomNavBar" component={BottomNavBar} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Posts" component={Posts} />
          <Stack.Screen name="Playground" component={Playground} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
