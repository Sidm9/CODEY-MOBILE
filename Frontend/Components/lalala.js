import React, {Fragment} from 'react';
import {Image, View, Text, StyleSheet, ImageBackground} from 'react-native';
import imgBGCD from '../assets/images/Untitled.png';
import PlaceHolders from '../Components/PlaceHolders';
import img6e2f9646 from '../assets/images/CodeyDark.png';
import LoginButton from './Button.js';
const styles = StyleSheet.create({
  s0cb0c9bc: {
    height: 220,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: 300,
  },
  sa46e13e2: {
    //backgroundColor: 'rgba(0, 0, 0, 0.74)',
    flexDirection: 'row',
    alignSelf: 'auto',
    justifyContent: 'flex-end',
    flex: 1,
  },
  sbd066762: {
    width: 200,
    height: 120,
    marginTop: 50,
    alignSelf: 'center',
  },
  sdbc762f0: {
    //color: 'rgba(255, 255, 255, 1)',
    fontSize: 45,
    fontFamily: 'Montserrat-Bold',
    margin: 10,
    marginTop: 120,
    marginLeft: 30,
    textAlign: 'left',
  },
  for: {
    //color: 'rgba(255, 255, 255, 1)',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    margin: 5,
    marginTop: 35,
    marginLeft: 0,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    //backgroundColor: 'rgba(15, 15, 15, 1)',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    //borderWidth: 8,
    justifyContent: 'flex-start',
  },
  sb2fc723d: {
    //backgroundColor: 'rgba(255, 0, 0, 1)',
    flex: 1,
    alignSelf: 'auto',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});

const App = props => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('../assets/images/3272176.jpg')}>
          <Image source={img6e2f9646} style={styles.sbd066762} />
          <Text style={styles.sdbc762f0}>Login</Text>
          <PlaceHolders placeholder={'Enter Email'} />
          <PlaceHolders placeholder={'Enter Password'} />
          <LoginButton text="Login" />
          <Text style={styles.for}>New Account?</Text>
        </ImageBackground>
      </View>
    </>
  );
};

App.defaultProps = {};

export default App;

export {imgBGCD, img6e2f9646, styles};
