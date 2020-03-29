import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 30,
  },
  headerLowerText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
  },
});
export default function SettingsHeader(props) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>{props.title}</Text>
        <Text style={styles.headerLowerText}>{props.subtitle}</Text>
      </View>
    </>
  );
}
