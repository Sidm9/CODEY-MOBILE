import React from 'react';
import PlaceHolders from './PlaceHolders';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function PasswordInput(props) {
  return (
    <>
      <PlaceHolder secureTextEntry="True" />
    </>
  );
}
