/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.15,
    marginTop: '1%',
    alignSelf: 'baseline',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: null,
  },
  username: {
    flex: 1,
    marginHorizontal: '1%',
    fontSize: 23,
    height: null,
    fontFamily: 'Montserrat-SemiBold',
  },
  comment: {
    flex: 1,
    width: '100%',
    marginHorizontal: '1%',
    height: null,
    flexWrap: 'wrap',
    fontFamily: 'Montserrat-Medium',
  },
  username_container: {
    flex: 1,
    overflow: 'hidden',
  },
  text: {
    margin: 5,
    fontFamily: 'Montserrat-Medium',
  },
  comment_bottom_bar: {
    flex: 1,
    borderTopWidth: 0.6,
    flexDirection: 'row',
    width: null,
    marginVertical: '1%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rightSection: {
    marginLeft: '0.5%',
    flex: 1,
    justifyContent: 'center',
  },
  commentCardContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: '1%',
    padding: '1%',
    borderRadius: 10,
    height: null,
    width: '98%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
  },
});

export default function CommentCard(props) {
  return (
    <>
      <View style={styles.commentCardContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/tyler.jpg')}
            style={{width: 35, borderRadius: 50, height: 35}}
          />
        </View>
        <View style={styles.rightSection}>
          <View style={styles.username_container}>
            <Text style={styles.username}>{props.username}</Text>
            <Text style={styles.comment}>{props.comment}</Text>
          </View>
          <View style={styles.comment_bottom_bar}>
            <Text style={styles.text}>{props.likes} Likes</Text>
            <Text style={styles.text}>Reply</Text>
            <Text style={styles.text}>{props.timestamp} </Text>
          </View>
        </View>
      </View>
    </>
  );
}
