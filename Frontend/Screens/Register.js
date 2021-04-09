/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions, Image,



  ImageBackground,


  KeyboardAvoidingView, StyleSheet, Text,


  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Easein from '../Animations/Easein';
import FadeInView from '../Animations/FadeIn';
import Facebook from '../assets/icons/facebook.png';
import Google from '../assets/icons/G.png';
import Github from '../assets/icons/git.png';
import codeyLogo from '../assets/images/CodeyDark.png';
import TextHere from '../Components/--TextHere---';
import LoginButton from '../Components/Button.js';
import OAuth from '../Components/GoogleButton';
import PasswordInput from '../Components/PasswordInput';
import PlaceHolders from '../Components/PlaceHolders';
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
    flex: 0.7,
    marginTop: '10%',
  },
  heading: {
    fontSize: 35,
    fontFamily: 'Montserrat-Bold',
    margin: 10,
    marginTop: 20,
    marginLeft: 40,
    textAlign: 'left',
  },
  entriesContainer: {
    borderWidth: 0,
    justifyContent: 'center',
    flex: 1.2,
    alignItems: 'flex-start',
  },
  footer: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    margin: 5,
    marginTop: '4%',
    marginLeft: 0,
    textAlign: 'center',
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: -1,
    position: "absolute",
  },
  registerWithContainer: {
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
    overflow: 'scroll',
  },
});

export default function login({navigation}) {
  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
       
          <ScrollView>
            <FadeInView style={styles.logoContainer}>
              <Image source={codeyLogo} style={styles.logo} />
            </FadeInView>
            <Easein style={styles.entriesContainer}>
              <Text style={styles.heading}>Register</Text>
              <PlaceHolders placeholder={'Enter Email'} />
              <PasswordInput
                placeholder={'Enter Password'}
                icon={require('../assets/icons/whiteVisible.png')}
              />
              <PasswordInput
                placeholder={'Enter Password Again'}
                icon={require('../assets/icons/whiteVisible.png')}
              />
              <LoginButton
                text="Continue ▶▶"
                click={() => navigation.navigate('BottomNavBar')}
              />
            </Easein>
            <Easein
              style={{
                flex: 0.7,
                borderWidth: 0,
                borderColor: 'green',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TextHere text={'OR'} />
              <Easein style={styles.registerWithContainer}>
                <OAuth text={'Google'} image={Google} />
                <OAuth text={'Github'} image={Github} />
                <OAuth text={'Facebook'} image={Facebook} />
              </Easein>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.footer}>Already Have Account?</Text>
              </TouchableOpacity>
            </Easein>
          </ScrollView>
      </KeyboardAvoidingView>
      <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/images/3272176.jpg')}/>
    </>
  );
}
