import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(191, 191, 110, 1)',
    borderRadius: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    alignItems: 'center',
    //   shadowColor: '#000',
    //   shadowOffset: {
    //     width: 0,
    //     height: 1,
    //   },
    //   shadowOpacity: 0.39,
    //   shadowRadius: 1.3,

    //   elevation: 1,
  },
  image: {
    width: 90,
    height: 90,
    // tintColor: 'rgba(7, 241, 241, 1)',
    // backgroundColor: 'rgba(1, 254, 1, 1)',
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
