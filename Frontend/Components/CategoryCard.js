import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

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
                  source={{
                    uri:
                      'https://cdn.iconscout.com/icon/free/png-256/c-programming-569564.png',
                  }}
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
  categoryCardNameStyle: {
    marginLeft: 10,
    fontSize: 22,
    fontFamily: 'Montserrat-SemiBold',
    color: 'white',
  },
  categoryCardTextContainer: {
    //backgroundColor: 'rgba(77, 86, 210, 1)',
    flex: 1,
    alignSelf: 'center',
  },
  imageStyle: {
    height: 80,
    width: 80,
    transform: [{rotate: '10.67deg'}],
    borderStyle: 'dotted',
    alignSelf: 'flex-end',
    borderRadius: 5,
    overflow: 'visible',
    flexWrap: 'wrap',
  },
  categoryImageContainer: {
    //backgroundColor: 'rgba(77, 86, 210, 1)',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: 'rgba(54, 208, 54, 1)',
    height: 120,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    margin: 15,
    shadowOpacity: 1,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowRadius: 6.93,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});
