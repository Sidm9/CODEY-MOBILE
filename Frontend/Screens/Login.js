/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Image,
  AsyncStorage,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import PlaceHolders from '../Components/PlaceHolders';
import PasswordInput from '../Components/PasswordInput';
import codeyLogo from '../assets/images/CodeyDark.png';
import LoginButton from '../Components/Button.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Oauth from '../Components/GoogleButton';
import Google from '../assets/icons/G.png';
import Github from '../assets/icons/git.png';
import Facebook from '../assets/icons/facebook.png';
import TextHere from '../Components/--TextHere---';

AuthContext = React.createContext();
const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 110,
    marginTop: 50,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 45,
    fontFamily: 'Montserrat-Bold',
    margin: 10,
    marginTop: 30,
    marginLeft: 40,
    textAlign: 'left',
  },
  footer: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    margin: 5,
    marginTop: 25,
    marginLeft: 0,
    textAlign: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  signUpWithContainer: {
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});

export default function login({ navigation }, props) {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/images/3272176.jpg')}>
          <Image source={codeyLogo} style={styles.logo} />
          <Text style={styles.heading}>Login</Text>
          <PlaceHolders placeholder={'Enter Email'} />
          <PasswordInput
            placeholder={'Enter Password'}
            icon={require('../assets/icons/whiteVisible.png')}
          />
          <LoginButton
            text="Login"
            click={() => navigation.navigate('Posts')}
          />
          <TextHere text={'OR'} />
          <View style={styles.signUpWithContainer}>
            <Oauth text={'Google'} image={Google} />
            <Oauth text={'Github'} image={Github} />
            <Oauth text={'Facebook'} image={Facebook} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.footer}>Don't Have An Account? </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </>
  );
}
