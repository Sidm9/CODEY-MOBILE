import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  HeaderStyle: {
    fontSize: 30,
    flex: 1,
    height: null,
    fontFamily: 'Montserrat-Bold',
    // borderWidth: 3,
  },
  BackIconHeaderStyle: {
    width: 20,
    height: 20,
    marginLeft: 20,
    marginTop: 32,
  },
  NavbarContainer: {
    flexDirection: 'row',
    alignItems: "center",
    // borderWidth: 4,
    flex: 0.3,
  },
});
export default function Header(props, { navigation }) {
  return (
    <View style={styles.NavbarContainer}>
      <TouchableOpacity
        style={styles.BackIconHeaderStyle}
        onPress={props.goBack}>
        <Image source={props.img} />
      </TouchableOpacity>
      <Text style={styles.HeaderStyle}>{props.title}</Text>
    </View>
  );
}
