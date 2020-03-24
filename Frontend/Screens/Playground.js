/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Header from '../Components/Navbar';
import Thumb from '../Components/ICONS/Thumb'
import Svg from '../assets/icons/thumb.svg';
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
      <Image source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png'}} 
      style={{width: 400, height: 400}} 
            />

       <Image source={require('../assets/icons/thumb.svg')} style={{width: 400, height: 400}   } />
    </>
  );
}
