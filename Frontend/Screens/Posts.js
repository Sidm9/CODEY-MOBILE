/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, VirtualizedList, SafeAreaView, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../Components/Card';
import Heading from '../Components/Heading';
import { max } from 'react-native-reanimated';

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
        'This string must be passed from Database and then this would ',
      time: '14:08',
    },
  ]);

  function ChatsList({ person_name, recent_chat, time }) {
    return (
      // <View>
      //               <Text style={styles.person_name}>{person_name}</Text>

      //               <Text style={styles.recent_chat} numberOfLines={1}>
      //                 {recent_chat}
      //               </Text>

      //             <Text style={styles.recent_chat_timestamp}> {time} </Text>
      <Card content={props.recent_chat} />
      // </View>


    );
  }
  const getItem = (data, index) => {
    return {
      id: Math.random().toString(12).substring(0),
      title: `Item ${index + 1}`
    }
  }

  const getItemCount = (data) => {
    return 50;
  }
  return (
    <>
      <View style={colorScheme === 'dark' ? Darkstyles.container : styles.container}>
          <Heading title="Feed" click={() => navigation.navigate('Profile')} />
          <VirtualizedList
            data={array}
            getItemCount={getItemCount}
            getItem={getItem}
            initialNumToRender={2}
            renderItem={({  }) => (
              <ChatsList />
            )} />
      </View>
    </>
  );
}
