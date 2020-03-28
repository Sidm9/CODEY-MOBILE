import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  lineMaker: {
    width: '100%',
    borderTopWidth: 1,
    alignSelf: 'center',
  },
  leftContainer: {
    width: '10%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    alignSelf: 'center',
  },
  midContainer: {
    width: 30,
    height: 30,
    flex: 0.4,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    width: '10%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    height: '6.3%',
    marginTop: '5%',
    paddingRight: '10%',
    paddingLeft: '10%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});

export default function TextHere(props) {
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={styles.lineMaker} />
        </View>
        <View style={styles.midContainer}>
          <Text style={styles.textStyle}>{props.text}</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.lineMaker} />
        </View>
      </View>
    </Fragment>
  );
}
