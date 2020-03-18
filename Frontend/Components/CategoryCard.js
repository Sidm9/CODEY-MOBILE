import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 4,
  },
  categoryCardNameStyle: {
    marginLeft: 5,
    fontSize: 21.7,
    fontFamily: 'Montserrat-SemiBold',
    color: 'white',
    textAlign: 'center',
    //borderWidth: 1,
    //borderColor: '#fffff',
  },
  categoryCardTextContainer: {
    flex: 2,
    alignSelf: 'center',
  },
  imageStyle: {
    height: 80,
    width: 80,
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
    //borderWidth: 1,
    borderRadius: 4,
  },
  categoryCardTextAndImageContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
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
    width: 180,
    height: 100,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    margin: 8,
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
            <Text style={styles.categoryCardNameStyle}>
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
