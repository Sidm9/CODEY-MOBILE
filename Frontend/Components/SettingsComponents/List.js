import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontFamily: 'Montserrat-SemiBold',
  },
  textDescription: {
    fontFamily: 'Montserrat-Medium',

    fontSize: 14,
  },
  listText: {
    height: null,
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  iconContainer: {
    width: 50,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemsContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    minHeight: 100,
    maxHeight: 100,
    alignSelf: 'center',
    paddingRight: 10,
    paddingTop: 20,
    borderBottomWidth: 0.8,
  },
  icon: {
    alignSelf: 'center',
    width: 40,
    height: 40,
  },
  iconLeft : {
    alignSelf: 'center',
    width: 40,
    height: 40,
    marginRight : 5,
  },
  iconLeftContainer: {
    width: 50,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight : 5,
  }
});

export default function List(props) {
  return (
    <>
      <TouchableOpacity style={styles.listItemsContainer}>
        <View style={styles.iconLeftContainer}>
            <Image
              source={require('../../assets/icons/icons8-account-100.png')}
              style={styles.iconLeft}
            />
        </View>
        <View style={styles.listText}>
          <Text style={styles.textStyle}>{props.title}</Text>
          <Text style={styles.textDescription}>{props.brief}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableNativeFeedback
            useForeground={true}
            background={TouchableNativeFeedback.Ripple('white', true)}>
            <Image
              source={require('../../assets/icons/arrowWhite.png')}
              style={styles.icon}
            />
          </TouchableNativeFeedback>
        </View>
      </TouchableOpacity>
    </>
  );
}
