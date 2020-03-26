/* eslint-disable no-unused-vars */
//THIS IS VERY SIMILAR TO HEADER.js EXCEPT THIS HAS NO BACK BUTTON
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  HeadingStyle: {
    width: 250,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 1,
    fontSize: 30,
    height: null,
    fontFamily: 'Montserrat-Bold',
  },
  NavbarContainer: {
    flex : 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
});
export default function Heading(props) {
  return (
    <View style={styles.NavbarContainer}>
      <Text style={styles.HeadingStyle}>{props.title}</Text>
    </View>
  );
}
