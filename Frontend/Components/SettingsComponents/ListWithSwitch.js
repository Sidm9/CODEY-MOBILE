/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Switch from './Switch.js';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    
  },
  // textDescription: {
  //   fontFamily: 'Montserrat-Medium',

  //   fontSize: 14,
  // },
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
    justifyContent: 'center',
    paddingLeft: 10,
    maxHeight: 100,
    alignSelf: 'center',
    alignItems :"center",
    alignContent: 'center',
    paddingRight: 10,
//    borderBottomWidth: 0.9,
  },
  icon: {
    alignSelf: 'center',
    width: 40,
    height: 40,
  },
  iconLeft: {
    alignSelf: 'center',
    width: 40,
    height: 40,
    marginRight: 5,
  },
  iconLeftContainer: {
    width: 50,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
});

export default function List(props) {
  return (
    <>
      <View style={styles.listItemsContainer}>
        {/*       <View style={styles.iconLeftContainer}>
          <Image source={props.img} style={styles.iconLeft} />
        </View>  */}
        <View style={styles.listText}>
          <Text style={styles.textStyle}>{props.title}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Switch />
        </View>
      </View>
    </>
  );
}
