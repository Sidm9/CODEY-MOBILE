import React, {Fragment} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const styles = StyleSheet.create({
  buttonStyle: {
    width: 65,
    borderRadius: 16,
    height: 65,
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'column',
    width: '33.3%',
    alignContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'center',
  },
});

export default function GoogleButton(props) {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.buttonStyle}
            source={props.image}
            resizeMode={'stretch'}
          />
          <Text style={styles.logoText}>{props.text}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
