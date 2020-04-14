/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, View, Text, StyleSheet, ImageBackground, Appearance } from 'react-native';
import Button from '../Components/Button.js';
import FadeInView from '../Animations/FadeIn.js';
import EaseIn from '../Animations/Easein.js';

const styles = StyleSheet.create({
  logo: {
    width: '95%',
    height: '100%',
    borderColor: 'black',
    alignSelf: 'center',
  },
  logoContainer: {
    width: '100%',
    height: null,
    flex: 0.6,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '20%',
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
    width: '95%',
    height: '100%',
    borderColor: 'white',
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
    color: 'white',
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
    flex: 0.5,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
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
  let bgDark = require('../assets/images/mai.jpg');
  let codeyDark = require('../assets/images/CodeyDark.png');
  let codeyWhite = require('../assets/images/CodeyWhiteBG.png');

  global.colorScheme = Appearance.getColorScheme();

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={colorScheme === 'dark' ? bgDark : bgWhite}>
          <FadeInView style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={colorScheme === 'dark' ? codeyWhite : codeyDark}
            />
          </FadeInView>
          <EaseIn style={styles.entryContainer}>
            <Button text="Login" click={() => navigation.navigate('Login')} />
            <Button
              text="Register"
              click={() => navigation.navigate('Register')}
            />
          </EaseIn>
          <EaseIn style={styles.footerContainer}>
            <Text style={colorScheme === 'dark' ? darkStyles.footer : styles.footer}>POWERED BY A7A</Text>
          </EaseIn>
        </ImageBackground>
      </View>
    </>
  );
}
