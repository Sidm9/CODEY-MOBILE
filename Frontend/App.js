/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import Login from './Screens/Login.js';
import Categories from './Screens/Categories.js';
import Register from './Screens/Register.js';
import Card from './Components/Card.js';
import Header from './Components/Header.js';
import Profile from './Screens/Profile.js';
import ImageHolder from './Components/ImageHolder.js';
const App: () => React$Node = () => {
  return (
    <>
      <Profile />
    </>
  );
};

export default App;
