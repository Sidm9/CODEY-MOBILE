/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import PlaceHolders from '../Components/PlaceHolders';
import PasswordInput from '../Components/PasswordInput';
import codeyLogo from '../assets/images/CodeyDark.png';
import LoginButton from '../Components/Button.js';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Oauth from '../Components/GoogleButton';
import Google from '../assets/icons/G.png';
import Github from '../assets/icons/git.png';
import Facebook from '../assets/icons/facebook.png';
import TextHere from '../Components/--TextHere---';
const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: 150,
    alignSelf: 'center',
  },
  logoContainer: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: '10%',
    flex: 0.7,
  },
  heading: {
    fontSize: 35,
    fontFamily: 'Montserrat-Bold',
    marginLeft: '11%',
    textAlign: 'left',
  },
  footer: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: '10%',
    textAlign: 'center',
    alignSelf: 'stretch',
    marginRight: '10%',
    marginLeft: '10%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  entriesContainer: {
    borderWidth: 0,
    justifyContent: 'center',
    flex: 1.2,
    alignItems: 'flex-start',
  },
  signUpWithContainer: {
    marginLeft: '8%',
    marginRight: '8%',
    marginTop: '8%',
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


export default function login({ route, navigation }, props) {
  // const {toggle} = route.params;
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/images/3272176.jpg')}>
          <ScrollView>
            <View style={styles.logoContainer}>
              <Image source={codeyLogo} style={styles.logo} />
            </View>
            <View style={styles.entriesContainer}>
              <Text style={styles.heading}>Login</Text>
              <PlaceHolders placeholder={'Enter Email'} />
              <PasswordInput
                placeholder={'Enter Password'}
              />
              <LoginButton
                text="Login"
                click={() => navigation.navigate('Posts')}
              />
            </View>
            <View style={{
              flex: 1.0, borderWidth: 0,
              borderColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <TextHere text={'OR'} />
              <View style={styles.signUpWithContainer}>
                <Oauth text={'Google'} image={Google} />
                <Oauth text={'Github'} image={Github} />
                <Oauth text={'Facebook'} image={Facebook} />
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.footer}>Don't Have An Account? </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </>
  );
}
