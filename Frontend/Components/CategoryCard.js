import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
export default function CategoryCard(props) {
  return (
    <View style={styles.categoryCardMainContainer}>
      <View style={styles.categoryCardGridContainer}>
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
                <Image
                  source={require('../assets/images/CS.png')}
                  style={styles.imageStyle}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  categoryCardNameStyle: {
    marginLeft: 10,
    fontSize: 20.5,
    fontFamily: 'Montserrat-SemiBold',
    color: 'white',
  },
  categoryCardTextContainer: {
    //backgroundColor: 'rgba(77, 86, 210, 1)',
    flex: 2,
    alignSelf: 'center',
  },
  imageStyle: {
    height: 65,
    width: 65,
    transform: [{rotate: '25.67deg'}],
    borderStyle: 'dotted',
    alignSelf: 'flex-end',
    borderRadius: 5,
    overflow: 'hidden',
    position: 'absolute',
    right: -8,
  },
  categoryImageContainer: {
    //backgroundColor: 'rgba(77, 86, 210, 1)',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -100,
  },
  categoryCardTextAndImageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    alignSelf: 'auto',
    flex: 1,
  },
  categoryCardButtonStyle: {
    backgroundColor: 'rgba(235, 58, 58, 1)',
    width: 0,
    height: 120,
    borderRadius: 20,
    flex: 1,
  },
  categoryCardContainer: {
    width: 180,
    //backgroundColor: 'rgba(54, 208, 54, 1)',
    height: 120,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    margin: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.86,
    shadowRadius: 6.68,
    elevation: 11,
  },
});
