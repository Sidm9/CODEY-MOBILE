import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default function PlaceHolders(props) {
  return (
    <>
      <TextInput
        style={styles.inputStyle}
        placeholder={props.placeholder}
        placeholderTextColor="black"
      />
    </>
  );
}
const styles = StyleSheet.create({
  inputStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    marginTop: 21,
    marginLeft: 35,
    marginRight: 35,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
});
