import React from 'react';
import {Image, View, Text, StyleSheet, ImageBackground} from 'react-native';
import PlaceHolders from '../Components/PlaceHolders';
import codeyLogo from '../assets/images/CodeyDark.png';
import LoginButton from '../Components/Button.js';
import {TouchableOpacity} from 'react-native-gesture-handler';
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
    marginTop: 120,
    marginLeft: 40,
    textAlign: 'left',
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
          <Text style={styles.heading}>Login</Text>
          <PlaceHolders placeholder={'Enter Email'} />
          <PlaceHolders
            placeholder={'Enter Password'}
            password={true}
            icon={require('../assets/icons/whiteVisible.png')}
          />
          <LoginButton
            text="Login"
            click={() => navigation.navigate('Posts')}
          />
          <TouchableOpacity style={styles.footer}>
            <Image
              style={{
                alignSelf: 'center',
                height: 45,
                borderRadius: 1,
                width: 350,
              }}
              source={require('../assets/images/google2.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.footer}>New Account?</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </>
  );
}
