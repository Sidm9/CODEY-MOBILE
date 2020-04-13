/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import CommentCard from '../Components/commentCard';
import { commentData } from '../Database/DbComment';
const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    width: '100%',
    height: null,
    //backgroundColor : 'lightyellow',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

const Temp = commentData;
export default function Comment() {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={Temp}
          renderItem={({ item }) => (
            <CommentCard
            username={item.usernames}
            comment={item.comment}
            likes = {item.likes}
            reply = {item.reply}
            timestamp = {item.time}/>
           )} />
      </View>
    </>
  );
}
