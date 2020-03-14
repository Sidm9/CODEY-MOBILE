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
import Register from './Screens/Register1.js';
import Card from './Components/Card.js';

const App: () => React$Node = () => {
  return (
    <>
      <Card />
    </>
  );
};



export default App;
