import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../Components/Navbar';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
});
export default function Playground() {
  return (
    <>
      <Header title="PlayGround" />
      <View style={styles.container} />
    </>
  );
}
