import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CommentCard from '../Components/commentCard';
import {ScrollView} from 'react-native-gesture-handler';
const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    width: '95%',
    height: null,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default function Comment(props) {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </ScrollView>
      </View>
    </>
  );
}
