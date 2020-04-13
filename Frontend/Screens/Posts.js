/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, RefreshControl, FlatList, Button } from 'react-native';
import Card from '../Components/Card';
import Heading from '../Components/Heading';
import {array} from '../Database/PostData'; 
import {fetchPosts} from '../redux/actions/postAction';

import { useSelector, useDispatch } from 'react-redux'




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const Darkstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function Posts({ navigation }, props) {
  

  const posts = useSelector(state => state.posts)

  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(fetchPosts());
  }, posts.items ? [posts.items.length] : [posts.items])

 

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(fetchPosts())
    wait(2000).then(() => setRefreshing(false));
  });
  


let ar = array;
  return (
    <>

      <View style={colorScheme != 'dark' ? Darkstyles.container : styles.container} >
        <Heading title="Feed" click={() => navigation.navigate('Profile')} />
        <FlatList
          initialNumToRender={8}
          data={posts.items}
          renderItem={({ item }) => (
            <Card
              imagesss={item.thumbnailUrl}
              heading={item.title}
              auther={item.person_name}
              time={item.time}
              timetoread={item.time_to_read}
              post={item.recent_chat} />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} />
      </View>
    </>
  );
}
