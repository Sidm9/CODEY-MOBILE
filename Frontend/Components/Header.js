import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  HeaderStyle: {
    width: 270,
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
export default function Header( props , {navigation}) {
  return (
    <View style={styles.NavbarContainer}>
      <TouchableOpacity
        style={styles.BackIconHeaderStyle}
        onPress={props.goBack}>
        <Image
          source={require('../assets/icons/baseline_arrow_back_ios_black_18dp.png')}
        />
      </TouchableOpacity>
      <Text style={styles.HeaderStyle}>{props.title}</Text>
    </View>
  );
}
