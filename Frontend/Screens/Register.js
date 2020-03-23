import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import PlaceHolders from '../Components/PlaceHolders';
import codeyLogo from '../assets/images/CodeyDark.png';
import LoginButton from '../Components/Button.js';
import GoogleButton from '../Components/GoogleButton';
import Google from '../assets/icons/G.png';
import Github from '../assets/icons/git.png';
import Facebook from '../assets/icons/facebook.png';
const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 120,
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
  subheading: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    margin: 5,
    marginTop: 25,
    marginLeft: 0,
    textAlign: 'center',
  },
  footer: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    margin: 5,
    marginTop: 35,
    marginLeft: 0,
    textAlign: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
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
  },
});

export default function login({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/images/3272176.jpg')}>
          <Image source={codeyLogo} style={styles.logo} />
          <Text style={styles.heading}>Register</Text>
          <PlaceHolders placeholder={'Enter Email'} />
          <PlaceHolders
            placeholder={'Enter Password'}
            password={true}
            icon={require('../assets/icons/whiteVisible.png')}
          />
          <PlaceHolders
            placeholder={'Enter Password Again'}
            password={true}
            icon={require('../assets/icons/whiteVisible.png')}
          />
          <LoginButton
            text="Continue ▶▶"
            click={() => navigation.navigate('NewCategory')}
          />
          <Text style={styles.subheading}>Or Register via </Text>
          <View style={styles.registerWithContainer}>
          <GoogleButton text={'Google'} image={Google} />
          <GoogleButton text={'Github'} image={Github} />
          <GoogleButton text={'Facebook'} image={Facebook} />
        </View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.footer}>Already Have Account?</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </>
  );
}
