/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import List from '../../Components/SettingsComponents/List.js';
import ListWithSwitch from '../../Components/SettingsComponents/ListWithSwitch.js';

const styles = StyleSheet.create({
  settingsHeader: {
    width: `100%`,
    height: null,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column",
    flex: 0.4,
  },
  container: {
    flex: 1,
    width: '90%',
    alignSelf: "center",
  },
  name: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    marginTop: '5%',
    flexWrap: 'wrap',
  },
  editImageContainer: {
    position: 'absolute',
    zIndex: 4,
    width: '30%',
    height: '30%',
    alignSelf: `flex-end`,
  },
  imageContainer: {
    position: 'relative',
    width: '30%',
    flex: 1,
    height: 100,
    justifyContent: `flex-end`,
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
    marginTop: '5%',
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
    borderRadius: 12,
    zIndex: -10,
  },
});


export default function Settings({ navigation }) {
  const a = require('../../assets/images/tyler.jpg');
  const b = require('../../assets/icons/editWhiteBG.png');
  const c = require('../../assets/icons/editDarkBG.png');
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.settingsHeader}>
            <View style={styles.imageContainer}>
              <Image source={a} style={styles.image} />
              <View style={styles.editImageContainer}>
                <Image source={c} style={styles.editImage} />
              </View>
            </View>
            <TouchableOpacity style={styles.editNameButtonContainer}>
              <Text style={styles.name}>Tyler Durden</Text>
              <Image source={b} style={styles.editButton} />
            </TouchableOpacity>
          </View>

          <View style={{
            flex: 1, flexDirection: "column", alignItems: `center`,
            justifyContent: `flex-start`, width: '100%'
          }}>

            <List
              title={'Account'}
              brief={'Manage Major Settings'}
              img={require('../../assets/icons/icons8-account-100.png')}
              click={() => navigation.navigate('Account')} />

            <List
              title={'Notifications'}
              brief={'Priority notifications & Push notfications'}
              img={require('../../assets/icons/notidWhiteBG.png')}
              click={() => navigation.navigate('Notification')} />

            <List
              title={'Appearance'}
              brief={'Dark Theme & Light Tofhuwoefrasdasdasdadasdsa '}
              img={require('../../assets/icons/lightwhite.png')}
              click={() => navigation.navigate('Appearance')} />

            <List
              title={'Security'}
              brief={'Manage Security'}
              img={require('../../assets/icons/securitywhite.png')}
              click={() => navigation.navigate('Security')} />

            <List
              title={'About'}
              brief={'Know What is Codey '}
              img={require('../../assets/icons/aboutblack.png')}
              click={() => alert('Codey - A7A')} />

          </View>
        </View>
      </ScrollView>
    </>
  );
}
