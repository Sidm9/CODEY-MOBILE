import React from 'react';
import {Image, View, Text, StyleSheet, ImageBackground} from 'react-native';
import Button from '../Components/Button.js';
const styles = StyleSheet.create({
  logo: {
    width: 350,
    height: 250,
    marginTop: 100,
    marginBottom: 20,
    marginRight: 20,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  footer: {
    marginTop: 180,
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

export default function({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/images/BG.jpg')}>
          <Image
            style={styles.logo}
            source={require('../assets/images/CodeyDark.png')}
          />
          <Button text="Login" click={() => navigation.navigate('Login')} />

          <Button
            text="Register"
            click={() => navigation.navigate('Register')}
          />

          <Text style={styles.footer}>POWERED BY A7A</Text>
        </ImageBackground>
      </View>
    </>
  );
}
