/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet, RefreshControl, FlatList, Button } from 'react-native';
import Card from '../Components/Card';
import Heading from '../Components/Heading';

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

  let [array, setarray] = useState([
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1586606445486-833e11c0d459?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      person_name: 'Siddharth dscir',
      title: ' 111 This is just a title nothing else it should be ... ed when becomes to large!',
      recent_chat:
        'This string must be passed from Database and then this would flex: 1, flexDirection :"row" , justifyContent :"flex-start",flex: 1, flexDirection :"row" , justifyContent :"flex-start",flex: 1, flexDirection :"row" , justifyContent :"flex-start",',
      time: '14:08 15th April 2020',
      time_to_read: '5 Minute',
    },
    {
      id: '2',
      image: 'https://reactnative.dev/img/tiny_logo.png',
      person_name: 'Siddharth Mishra',
      title: 'This is just a title nothing else it should be ... ed when becomes to large!',
      recent_chat:
        'This string must be passed from Database and then this would ',
      time: '14:08 15th April 2020',
      time_to_read: '5 Minute',
    },
    {
      id: '3',
      image: 'https://reactnative.dev/img/tiny_logo.png',
      person_name: 'Siddharth Mishra',
      title: 'This is just a title nothing else it should be ... ed when becomes to large!',
      recent_chat:
        'This string must be passed from Database and then this would ',
      time: '14:08 15th April 2020',
      time_to_read: '5 Minute',
    },
    {
      id: '4',
      image: 'https://cdn.discordapp.com/attachments/662330689521188874/698543855485714432/JPEG_20200411_201331.jpg',
      person_name: 'Siddwieufgiwuegfharth Mishra',
      title: 'This is just  title nothing else it should be ... ed when becomes to large!',
      recent_chat:
        'This string must be passed from Database and then this would ',
      time: '14:08 15th April 2020',
      time_to_read: '5 Minute',
    },
    {
      id: '5',
      image: 'https://reactnative.dev/img/tiny_logo.png',
      person_name: 'Siddharth Mishra',
      title: 'This is just a title nothing else it should be ... ed when becomes to large!',
      recent_chat:
        'Okay It work  ',
      time: '14:08 15th April 2020',
      time_to_read: '5 Minute',
    },
  ]);

  return (
    <>

      <View style={colorScheme === 'dark' ? Darkstyles.container : styles.container} >
        <Heading title="Feed" click={() => navigation.navigate('Profile')} />
        <Button title  = "Comments" onPress = {() => navigation.navigate('Comment')} />
        <FlatList
          data={array}
          initialNumToRender={5}
          renderItem={({ item }) => (
            <Card
              imagesss={item.image }
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
