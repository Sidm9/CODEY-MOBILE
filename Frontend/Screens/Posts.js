/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet, RefreshControl, FlatList, Button } from 'react-native';
import Card from '../Components/Card';
import Heading from '../Components/Heading';
import {array} from '../Database/PostData'; 

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

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  });

let ar = array;
  return (
    <>

      <View style={colorScheme === 'dark' ? Darkstyles.container : styles.container} >
        <Heading title="Feed" click={() => navigation.navigate('Profile')} />
        <FlatList
          data={ar}
          initialNumToRender={5}
          renderItem={({ item }) => (
            <Card
              imagesss={item.image}
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
