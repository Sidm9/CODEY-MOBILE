/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
const styles = StyleSheet.create({
  inputStyle: {
    width: '83%',
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    marginLeft: 10,
  },
  icon: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    marginRight: 10,
  },
  inputContainer: {
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '85%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
});

export default function PasswordInput(props) {
  var [showPass, setPass] = useState(true);
  const closed = require('../assets/icons/icons8-closed-eye-96.png');
  const open = require('../assets/icons/icons8-eye-96.png');
  function set() {
    setPass(!showPass);
  }
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder={props.placeholder}
          placeholderTextColor="black"
          secureTextEntry={showPass}
        />
        <TouchableOpacity onPress={set}>
          <Image style={styles.icon} source={showPass === true ? closed : open } />
        </TouchableOpacity>
      </View>
    </>
  );
}
