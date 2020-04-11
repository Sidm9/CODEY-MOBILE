import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 28,
  },
});
export default function ImageHolder(props) {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={props.img} />
      </View>
    </>
  );
}
