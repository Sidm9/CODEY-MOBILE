/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PlaceHolders from '../Components/PlaceHolders';
import GoogleButton from '../Components/GoogleButton';
import SignUpButton from '../Components/Button';
//import LinearGradient from 'react-native-linear-gradient';
export default function Reg(props) {
  return (
    // <LinearGradient
    //   style={styles.container}
    //   colors={[
    //     '#00d2ff',
    //     '#3a7bd5',
    //   ]}
    // >
    <>
      <View style={styles.container}>
        <View style={styles.applogo}>
          <Image
            source={require('../assets/images/CodeyDark.png')}
            resizeMode="cover"
            style={styles.headerImage} />
        </View>
      </View>

      <View style={{ flex: 2 }}>
        <Text style={styles.register}>Register</Text>

        <PlaceHolders placeHolder="Enter Email" />
        <PlaceHolders placeHolder="Enter Passoword" />

        <SignUpButton style={styles.buttonStyle} text="Reg" />
        <Text style={styles.alreadyHaveAccount}>Already Have Account?</Text>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  applogo: {
    marginTop: 30,
    width: 375,
    height: 1,
  },
  headerImage: {
    width: 220,
    height: 120,
    alignSelf: 'center',
    marginTop: 30,
  },
  centeredButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  register: {
    color: '#121212',
    fontSize: 30,
    marginTop: 320,
    marginLeft: 35,
    marginRight : 35,
    fontFamily: 'Montserrat-Bold',

  },
  buttonStyle: {

    alignItems: 'center',
    justifyContent: 'center',

  },
  alreadyHaveAccount: {
    color: '#121212',
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 32,
  },
});
