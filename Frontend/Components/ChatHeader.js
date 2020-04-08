/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    borderWidth: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Text: {
    width: null,
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
  },
  go_back_button: {
    width: '10%',
    height: '100%',
    borderWidth: 3,
  },
});
export default function ChatHeader(props) {
  return <>
      <View style={styles.container}>
        <View style={styles.go_back_button} />
        <Text style={styles.Text}>{props.title}</Text>
        <View style={styles.go_back_button} />
      </View>
  </>;
}
