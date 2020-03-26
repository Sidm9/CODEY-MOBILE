/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
//THIS IS VERY SIMILAR TO HEADER.js EXCEPT THIS HAS NO BACK BUTTON
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  HeadingStyle: {
    width: 250,
    fontSize: 45,
    marginLeft : 15,
    height: null,
    fontFamily: 'Montserrat-Bold',
    alignItems :  "center",
    justifyContent : "center",
  },
  NavbarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    borderColor: 'black',
    justifyContent: 'space-between',
    alignContent: "center",
    textAlignVertical: "center",
  },
  image: {
    alignSelf: 'center',
    borderRadius: 50,
    marginRight : 20,
    width: 50,
    height: 50,
    borderWidth : 0.5,
    borderColor: 'black',
  },
});
export default function Heading(props) {
  return (
    <View style={styles.NavbarContainer}>
      <Text style={styles.HeadingStyle}>{props.title}</Text>
      <Image source={require('../assets/images/tyler.jpg')} style={styles.image} />
    </View>
  );
}
