//THIS IS VERY SIMILAR TO HEADER.js EXCEPT THIS HAS NO BACK BUTTON
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  HeaderStyle: {
    width: 250,
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 40,
    height: 60,
    fontFamily: 'Montserrat-Bold',
  },
  BackIconHeaderStyle: {
    width: 20,
    height: 20,
    marginLeft: 20,
    marginTop: 32,
  },
  NavbarContainer: {
    flexDirection: 'row',
  },
});
export default function Header(props) {
  return (
    <View style={styles.NavbarContainer}>
      <Text style={styles.HeaderStyle}>{props.title}</Text>
    </View>
  );
}
