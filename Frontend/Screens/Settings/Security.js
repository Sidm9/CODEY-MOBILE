import React from 'react';
import {View, StyleSheet} from 'react-native';
import List from '../../Components/SettingsComponents/ListWithSwitch';
import ListWithSwitch from '../../Components/SettingsComponents/ListWithSwitch.js';
import SettingsHeader from './SettingsHeader';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default function Account() {
  return (
    <>
      <View style={styles.container}>
        <SettingsHeader
          title={'Security'}
          subtitle={'Mange Normal notifications'}/>

      </View>
    </>
  );
}
