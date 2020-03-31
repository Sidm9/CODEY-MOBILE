/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
// CATEGORY CARD IS THE SIMPLEST COMPONENT CONTAING CARDS BLUEPRINT (IN SET OF 2)
const styles = StyleSheet.create({
  categoryCardNameStyle: {
    marginLeft: 5,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: 'white',
    textAlign: "center",

  },
  categoryCardTextContainer: {
    flex: 2,
    alignSelf: 'center',
  },
  imageStyle: {
    height: 70,
    width: 70,
    transform: [{rotate: '25.67deg'}],
    alignSelf: 'flex-end',
    overflow: 'visible',
    flexWrap: 'wrap',
    zIndex: -1000,
    left: 14,
    top: -34,
  },
  categoryImageContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -100,
    overflow: 'hidden',
    borderRadius: 4,
  },
  categoryCardTextAndImageContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    alignSelf: 'auto',
    flex: 1,
  },
  categoryCardButtonStyle: {
    backgroundColor:
      'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(85,201,55,1) 0%, rgba(0,212,255,1) 100%)',
    width: 0,
    height: 100,
    borderRadius: 8,
    flex: 1,
  },
  categoryCardContainer: {
    // width: 180,
    // height: 100,
  
    borderRadius: 20,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    flex: 0.5,
    maxWidth: '50%',
    margin: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

export default function CategoryCard(props) {
  return (
    <View style={styles.categoryCardContainer}>
      <TouchableOpacity
        onPress={() => {}}
        style={styles.categoryCardButtonStyle}>
        <View style={styles.categoryCardTextAndImageContainer}>
          <View style={styles.categoryCardTextContainer}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.categoryCardNameStyle}>
              {props.languageName}
            </Text>
          </View>
          <View style={styles.categoryImageContainer}>
            <Image source={props.languageIcon} style={styles.imageStyle} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
