/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, ImageBackground, Appearance } from 'react-native';
import Button from '../Components/Button.js';

const styles = StyleSheet.create({
  logo: {
    width: '80%',
    height: '70%',
    borderColor: 'black',
    alignSelf: 'center',
  },
  logoContainer: {
    width: '100%',
    height: null,
    flex: 0.6,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  footer: {
    fontSize: 20,
    width: '100%',
    letterSpacing: 5,
    justifyContent: 'flex-end',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  footerContainer: {
    alignItems: 'flex-end', 
    flex: 0.3, 
    justifyContent: "flex-start",
     width: '100%', 
     paddingBottom: '10%', 
     flexDirection: 'row',
  },
  entryContainer: {
    flex: 0.6, justifyContent: "center", alignItems: "center",
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
});

const darkStyles = StyleSheet.create({
  logo: {
    width: '80%',
    height: '70%',
    borderColor: 'black',
    alignSelf: 'center',
  },
  logoContainer: {
    width: '100%',
    height: null,
    flex: 0.6,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  footer: {
    fontSize: 20,
    width: '100%',
    letterSpacing: 5,
    justifyContent: 'flex-end',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  footerContainer: {
    alignItems: 'flex-end', 
    flex: 0.3, 
    justifyContent: "flex-start",
     width: '100%', 
     paddingBottom: '10%', 
     flexDirection: 'row',
  },
  entryContainer: {
    flex: 0.5, borderWidth: 3, justifyContent: "center", alignItems: "center",
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
});

export default function ({ navigation }) {
  let bgWhite = require('../assets/images/BG.jpg');
  let bgDark = require('../assets/images/bgDark.png');
  let codeyDark = require('../assets/images/CodeyDark.png');
  let codeyWhite = require('../assets/images/CodeyWhiteBG.png');

  global.colorScheme = Appearance.getColorScheme();

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={colorScheme === 'dark' ? bgDark : bgWhite}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={colorScheme === 'dark' ? codeyWhite : codeyDark}
            />
          </View>
          <View style={styles.entryContainer}>
            <Button text="Login" click={() => navigation.navigate('Login')} />
            <Button
              text="Register"
              click={() => navigation.navigate('Register')}
            />
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footer}>POWERED BY A7A</Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
