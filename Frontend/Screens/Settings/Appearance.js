import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import List from '../../Components/SettingsComponents/ListWithSwitch';
import ListWithSwitch from '../../Components/SettingsComponents/ListWithSwitch.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default function Account() {
  return (
    <>
      <View style={styles.container}>
        <ListWithSwitch title={'Dark Mode'} brief={'Dark Mode ?'} />
      </View>

    </>
  );
}
