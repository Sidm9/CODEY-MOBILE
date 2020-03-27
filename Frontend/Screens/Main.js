/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, ImageBackground, Appearance, } from 'react-native';
import Button from '../Components/Button.js';

const styles = StyleSheet.create({
  logo: {
    width: 350,
    height: 250,
    marginTop: 100,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  footer: {
    marginTop: 110,
    fontSize: 20,
    letterSpacing: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Montserrat-Bold',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'stretch',
  },
});

const darkStyles = StyleSheet.create({
  logo: {
    width: 350,
    height: 250,
    marginTop: 100,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'stretch',
  },
  footer: {
    marginTop: 110,
    fontSize: 20,
    letterSpacing: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Montserrat-Bold',
    color: 'white',
  },
})

export default function ({ navigation }) {
  let bgWhite = require('../assets/images/BG.jpg');
  let bgDark = require('../assets/images/bgDark.png');
  let codeyDark = require('../assets/images/CodeyDark.png');
  let codeyWhite = require('../assets/images/CodeyWhiteBG.png');
  const [toggle, setToggle] = useState(true);

  global.colorScheme = Appearance.getColorScheme();

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={colorScheme === 'dark' ? bgDark : bgWhite}>
          <Image
            style={styles.logo}
            source={colorScheme === 'dark' ? codeyWhite : codeyDark}
          />
          <Button text="Login" click={() => navigation.navigate('Login')} />

          <Button
            text="Register"
            click={() => navigation.navigate('Register')}
          />
          <Text style={darkStyles.footer}>POWERED BY A7A</Text>
        </ImageBackground>
      </View>
    </>
  );
}
