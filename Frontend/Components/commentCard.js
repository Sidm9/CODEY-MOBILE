/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.15,
    // marginTop : '1%',
    marginRight: '1%',
    alignSelf: 'baseline',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: null,
  },
  username: {
    flex: 1,
    fontSize: 23,
   // borderWidth: 1,
    height: null,
    fontFamily: 'Montserrat-Medium',
  },
  comment: {
    flex: 1,
    width: '100%',
    height: null,
    flexWrap: 'wrap',
    fontFamily: 'Montserrat-Medium',
    //borderWidth: 1,
  },
  username_container: {
    borderWidth: 0,
    flex: 1,
    overflow: 'hidden',
    height: '100%',
    flexShrink: 1,
  },
  text: {
    margin: 5,
    fontFamily: 'Montserrat-Medium',
  },
  comment_bottom_bar: {
    flex: 1,
    margin: '1%',
    borderTopWidth: 1,
    flexDirection: 'row',
    width: null,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rightSection: {
    borderWidth: 1,
    marginLeft: '0.5%',
    flex: 1,
    height: null,
    width: null,
    justifyContent: 'center',
  },
  commentCardContainer: {
    flex: 1,
    backgroundColor: 'steelblue',
    margin: '2%',
    padding: '2%',
    borderRadius: 12,
    height: null,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
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
