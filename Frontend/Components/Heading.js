/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
//THIS IS VERY SIMILAR TO HEADER.js EXCEPT THIS HAS NO BACK BUTTON
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
  HeadingStyle: {
    width: '70%',
    height : '100%',
    fontSize: 35,
    marginLeft : 25,
    fontFamily: 'Montserrat-Bold',
    alignItems :  "center",
    justifyContent : "center",
    // borderWidth : 3,
  },
  NavbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:5,
    borderColor: 'black',
    justifyContent: 'space-between',
    alignContent: "center",
    textAlignVertical: "center",
    // borderWidth : 3,
  },
  image: {
    alignSelf: 'center',
    borderRadius: 50,
    marginRight : 20,
    marginTop : 4,
    width: 50,
    height: 50,
    borderColor: 'black',
    // borderWidth : 3,
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
