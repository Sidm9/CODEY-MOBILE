/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import ImageHolder from '../../Components/ImageHolder';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Heading from '../../Components/Heading';
import Header from '../../Components/Navbar';
import List from '../../Components/SettingsComponents/List.js';
const styles = StyleSheet.create({
  settingsHeader: {
    backgroundColor: `rgba(222, 159, 159, 1)`,
    width: `100%`,
    height: null,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column",
    borderWidth: 4,
    flex: 0.4,
  },
  container: {
    flex: 1,
    backgroundColor: `rgba(208, 31, 74, 1)`,
  },
  name: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    flexWrap: 'wrap',
  },
  editImageContainer: {
    width: 40,
    height: 40,
    borderWidth: 1,
    alignSelf: `flex-end`
  },
  imageContainer: {
    width: 100,
    borderWidth: 2,
    height: 100,
    justifyContent: `flex-end`
  },
  editNameButtonContainer: {
    flexDirection: "row",
    paddingLeft: 11,
    paddingRight: 11,
    paddingTop: 5,
    alignItems: "center",
  },
  editButton: {
    width: 25,
    height: 25,
    right: -4,
    borderColor: 'white',
  },
  editImage: {
    borderWidth: 1,
    width: '100%',
    height: '100%',
    zIndex: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    zIndex: -10,
  }
});

export default function Settings() {
  const a = require('../../assets/images/qqwe.jpg');
  const b = require('../../assets/icons/editWhiteBG.png');
  const c = require('../../assets/icons/editDarkBG.png');
  return (
    <>
      <View style={styles.container}>
        <View style={styles.settingsHeader}>
          <View style={styles.imageContainer}>
            <Image source={a} style={styles.image} />
            <View style={styles.editImageContainer}>
              <Image source={a} style={styles.editImage} />
            </View>
          </View>
          <TouchableOpacity style={styles.editNameButtonContainer}>
            <Text style={styles.name}>Tyler Durden</Text>
            <Image source={c} style={styles.editButton} />
          </TouchableOpacity>
        </View>
        <View style = {{flex : 1 ,borderWidth :6, flexDirection : "column" , alignItems: `center`,
        justifyContent: `flex-start`}}>
        <List/>
        </View>
      </View>
    </>
  );
};