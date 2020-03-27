import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontFamily: 'Montserrat-Medium',
  },
  textDescription: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  listText: {
    height: null,
    flex: 1,
    flexWrap: 'wrap',
  },
  iconContaienr: {
    width: 50,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemsContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    alignSelf: 'center',
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 1,
    borderBottomWidth: 0.8,
  },
  icon: {
    alignSelf: 'center',
    width: 40,
    height: 40,
  },
});

export default function List() {
  return (
    <>
      <View style={styles.listItemsContainer}>
        <View style={styles.listText}>
          <Text style={styles.textStyle}>Heading</Text>
          <Text style={styles.textDescription}>
            Porvides a breif description of the text content this
          </Text>
        </View>
        <View style={styles.iconContaienr}>
          <Image
            source={require('../../assets/icons/icons8-eye-96.png')}
            style={styles.icon}
          />
        </View>
      </View>
    </>
  );
}
