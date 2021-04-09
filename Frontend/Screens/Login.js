import React from 'react';
import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Easein from '../Animations/Easein';
import FadeInView from '../Animations/FadeIn';
import Facebook from '../assets/icons/facebook.png';
import Google from '../assets/icons/G.png';
import Github from '../assets/icons/git.png';
import CodeyLogo from '../assets/images/CodeyDark.png';
import TextHere from '../Components/--TextHere---';
import LoginButton from '../Components/Button.js';
import Oauth from '../Components/GoogleButton';
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: -1,
    position: "absolute",
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
export default function login({ navigation }) {
  return (
    <>
    
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView>
          <FadeInView style={styles.logoContainer}>
            <Image source={CodeyLogo} style={styles.logo} />
          </FadeInView>
          <Easein style={styles.entriesContainer}>
            <Text style={styles.heading}>Login</Text>
            <PlaceHolders placeholder={'Enter Email'} />
            <PasswordInput
              placeholder={'Enter Password'}
            />
            <LoginButton
              text="Login"
              click={() => navigation.navigate('Posts')}
            />
          </Easein>
          <Easein style={{
            flex: 1.0,
            borderWidth: 0,
            borderColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <TextHere text={'OR'} />
            <Easein style={styles.signUpWithContainer}>
              <Oauth text={'Google'} image={Google} />
              <Oauth text={'Github'} image={Github} />
              <Oauth text={'Facebook'} image={Facebook} />
            </Easein>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.footer}>Don't Have An Account? </Text>
            </TouchableOpacity>
          </Easein>
        </ScrollView>

      </KeyboardAvoidingView>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/images/3272176.jpg')} />
    </>
  );
}
