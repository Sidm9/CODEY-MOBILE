/* eslint-disable prettier/prettier */
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
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
//import Login from './Components/Login.js';
import Register from './Register.js';
import Login from './Login.js';

export default function signUpRegisterHandler(props) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView} />
        <View style={styles.container}>
          <View style={styles.headerImage}>
            <Image
              source={require('../assets/images/CodeyDark.png')}
              resizeMode="cover"
              style={styles.headerImage}
            />
          </View>
          <View style={styles.mainRow}>
            <TouchableOpacity><Text style={styles.signUp}>Sign Up</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.register}>Register</Text></TouchableOpacity>
          </View>
          <View style={styles.loginStyle}>
            <Register />
          </View>
        </View>

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: 220,
    height: 120,
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  mainRow: {
    height: 80,
    flexDirection: 'row',
  },
  signUp: {
    fontSize: 30,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
    paddingTop : 40,
    paddingLeft : 60,
    marginTop: 10,
    // borderColor: 'black',
    // borderWidth: 1,

  },
  register: {
    fontSize: 30,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
    paddingLeft: 50,
    paddingTop: 40,
    paddingRight : 30,
    marginTop: 10,
    //borderWidth: 1,
  },
  loginStyle: {
    padding: 55,
  }
});

