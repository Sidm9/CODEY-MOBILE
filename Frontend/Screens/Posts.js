/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Button, FlatList } from 'react-native';
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
export default function Posts({ navigation }, props) {

  let [array, setarray] = useState([
    {
      id: '1',
      person_name: 'Siddharth Mishra',
      recent_chat:
        'This string must be passed from Database and then this would ',
      time: '14:08',
    },
    {
      id: '2',
      person_name: 'Siddharth Mishra',
      recent_chat:
        'This string must be passed from Database and then this would ',
      time: '14:08',
    },
    {
      id: '3',
      person_name: 'Siddharth Mishra',
      recent_chat:
        'This string must be passed from Database and then this would ',
      time: '14:08',
    },
    {
      id: '4',
      person_name: 'Siddharth Mishra',
      recent_chat:
        'This string must be passed from Database and then this would ',
      time: '14:08',
    },
    {
      id: '5',
      person_name: 'Siddharth Mishra',
      recent_chat:
        'Okay It works  ',
      time: '14:08',
    },
  ]);

  return (
    <>
      <View style={colorScheme === 'dark' ? Darkstyles.container : styles.container}>
        <Heading title="Feed" click={() => navigation.navigate('Profile')} />
        <FlatList
          data={array}
          // initialNumToRender={5}
          renderItem={({ item }) => (
            <Card contenthandler={item.recent_chat} />
          )} />
      </View>
    </>
  );
}
