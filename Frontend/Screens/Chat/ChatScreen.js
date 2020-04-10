import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Heading from '../../Components/Heading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    marginVertical: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    // borderBottomWidth: 1,
    borderColor: 'black',
  },
  person_name: {
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 17,
    marginVertical: 1,
    //borderWidth: 1,
  },
  recent_chat: {
    color: 'black',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    //borderWidth: 1,
  },
  recent_chat_timestamp: {
    color: 'black',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    textAlign: 'center',
    //borderWidth: 1,
  },
  right_and_left_container: {
    //borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    borderColor: 'red',
    flexWrap: 'wrap',
  },
  left_container: {
    //borderWidth: 1,
    flex: 4,
  },
  right_container: {
    //borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_container: {
    width: 45,
    height: '100%',
    justifyContent: 'center',
    marginRight: 5,
    // borderWidth :4,
  },
  image: {
    alignSelf: 'center',
    width: '80%',
    height: '80%',
    borderRadius: 50,
    // marginRight: 5,
    // borderWidth: 4,
  },
});
export default function ChatScreen({navigation}, props) {
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

  function ChatsList({person_name, recent_chat, time}) {
    return (
      <View style={styles.item}>
        <View style={styles.right_and_left_container}>
          <View style={styles.image_container}>
            <Image
              source={require('../../assets/images/tyler.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.left_container}>
            <View style={styles.person_name}>
              <Text style={styles.person_name}>{person_name}</Text>
            </View>
            <View style={styles.recent_chat}>
              <Text style={styles.recent_chat} numberOfLines={1}>
                {recent_chat}
              </Text>
            </View>
          </View>
          <View style={styles.right_container}>
            <Text style={styles.recent_chat_timestamp}> {time} </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <Heading title="Chats" click={() => navigation.navigate('Profile')} />
        <FlatList
          data={array}
          initialNumToRender={10}
          renderItem={({item}) => (
            <TouchableOpacity onPress={navigation.navigate('ChatLayout')}>
              <ChatsList
                person_name={item.person_name}
                recent_chat={item.recent_chat}
                time={item.time}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}
