/* eslint-disable react/self-closing-comp */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Login from './Screens/Login.js';
import Register from './Screens/Register1.js';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <Login/>
    </>
  );
};

const styles = StyleSheet.create({
  
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
