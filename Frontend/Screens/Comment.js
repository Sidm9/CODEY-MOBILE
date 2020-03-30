import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CommentCard from '../Components/commentCard'
const styles = StyleSheet.create({

  container: {
    borderWidth: 2,
    width: '100%',
    height: null,
    backgroundColor:'blue',
    flex: 1,
    flexDirection: 'column',
  },
});

export default function Comment(props) {
  return (
    <>
        <View style={styles.container}>
          <CommentCard/>
        </View>
    </>
  );
};
