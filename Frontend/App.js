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
import {SafeAreaView, ScrollView} from 'react-native';
import Login from './Screens/Login.js';
import Categories from './Screens/Categories.js';
import Register from './Screens/Register.js';
import Card from './Components/Card.js';
import Header from './Components/Header.js';
import Profile from './Screens/Profile.js';
import ImageHolder from './Components/ImageHolder.js';
import SearchBar from './Components/SearchBar.js';
import Main from './Screens/Main.js';
import Posts from './Screens/Posts.js';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Posts" component={Posts} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
