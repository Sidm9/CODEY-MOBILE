/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import List from '../../Components/SettingsComponents/ListWithSwitch';
import ListWithSwitch from '../../Components/SettingsComponents/ListWithSwitch.js';
import SettingsHeader from './SettingsHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Easein from '../../Animations/Easein';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Account() {
  return (
    <>
    
    <Easein style = {style.container}>
    <ScrollView>
      <SettingsHeader title = {'Notifications'}  subtitle = {'Mange Normal notifications'}/>

      <ListWithSwitch title={'Push Notification'} brief={'Dark Mode ?'} />
      <ListWithSwitch title={'Email Notification'} brief={'Dark Mode ?'}  />

      <SettingsHeader title = {'Post Updates'}  subtitle = {'Mange updates related to posts'}/>

      <ListWithSwitch title={'Language Notifications'} brief={'Dark Mode ?'} />
      <ListWithSwitch title={'Major Updates'} brief={'Dark Mode ?'}  />

      </ScrollView>
      </Easein>
    </>
  );
}
