/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { NeomorphBox } from 'react-native-neomorph-shadows';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Login(props) {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <View style={styles.container} >
        <NeomorphBox
          outer// <- enable shadow inside of neomorph
          // <- change zIndex of each shadow color
          style={styles.neorphboxStyling}
        >
          <TextInput style={styles.inputStyle}
            placeholder=" Enter Full Name"
            placeholderTextColor="#000000"
            autoCapitalize="none" />
        </NeomorphBox>
      </View>
      <View style={styles.container}>
        <NeomorphBox
          outer// <- enable shadow inside of neomorph
          // <- change zIndex of each shadow color
          style={styles.neorphboxStyling}
        >
          <TextInput style={styles.inputStyle}
            placeholder=" Enter Password"
            type="outlined"
            placeholderTextColor="#000000"
            autoCapitalize="none" />
        </NeomorphBox>
      </View>

      <View style={styles.container}>

        <View style={styles.container}>
          <Button mode="contained" style={styles.buttonStyle} > Sign Up </Button>
        </View>

      </View>

      <View style={styles.container}>

        <TouchableOpacity>
          <Text style={{ fontFamily: 'Montserrat-Regular', textAlign: 'center' }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
    </>

  );
}
const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 50,
    marginBottom: 30,
  },
  inputStyle: {
    fontFamily: 'Montserrat-Regular',
    marginLeft: 15,
  },
  buttonStyle: {
    backgroundColor: '#0A8EF3',
    borderRadius: 25,
  },
  neorphboxStyling: {
    shadowRadius: 2,
    borderRadius: 25,
    backgroundColor: '#EEF1F6',
    width: 300,
    height: 50,
  },
});
