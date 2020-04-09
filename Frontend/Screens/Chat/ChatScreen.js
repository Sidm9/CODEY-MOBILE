import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import List from '../../Components/SettingsComponents/List';
import Header from '../../Components/Navbar';
import Heading from '../../Components/Heading';
import {ScrollView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 3,
  },
  person_name: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    borderWidth: 1,
  },
  recent_chat: {
    color: 'black',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    borderWidth: 1,
  },
  right_and_left_container: {
    borderWidth: 1,
  },
});
export default function ChatScreen({navigation}, props) {
  let [array, setarray] = useState([
    {
      id: '1',
      person_name: 'Siddharth Mishra',
      recent_chat:
        'This string must be passed from Database and then this would ',
    },
    {
      id: '2',
      person_name: 'Siddharth Mishra',
      recent_chat:
        'This string must be passed from Database and then this would ',
    },
    {
      id: '3',
      person_name: 'Siddharth Mishra',
      recent_chat:
        'This string must be passed from Database and then this would ',
    },
    {
      id: '4',
      person_name: 'Siddharth Mishra',
      recent_chat:
        'This string must be passed from Database and then this would ',
    },
    {
      id: '5',
      person_name: 'Siddharth Mishra',
      recent_chat:
        'This string must be passed from Database and then this would ',
    },
  ]);

  function Item({person_name, recent_chat}) {
    return (
      <View style={styles.item}>
        <View style={styles.right_and_left_container}>
          <View style={styles.person_name}>
            <Text style={styles.person_name}>{person_name}</Text>
          </View>
          <View style={styles.recent_chat}>
            <Text style={styles.recent_chat} numberOfLines={1}>
              {recent_chat}
            </Text>
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
          renderItem={({item}) => (
            <Item
              person_name={item.person_name}
              recent_chat={item.recent_chat}
            />
          )}
        />
        {/*       //   <List
        //     title="Person 1"
        //     brief="Before you speak, listen. Before you write, think. Before you spend, earn. "
        //     img={require('../../assets/images/tyler.jpg')}
        //   />
        //   <List
        //     title="Person 2"
        //     brief="It is not the man who has too little, but the man who craves more, that is poor."
        //     img={require('../../assets/images/tyler.jpg')}
        //   />
        //   <List
        //     title="Person 3"
        //     brief="Not he who has much is rich, but he who gives much."
        //     img={require('../../assets/images/tyler.jpg')}
        //   />
        //   <List
        //     title="Person 4"
        //     brief="This is something else"
        //     img={require('../../assets/images/tyler.jpg')}
        //   />
        //   <List
        //     title="Person 5"
        //     brief="Before you speak, listen. Before you write, think. Before you spend, earn. "
        //     img={require('../../assets/images/tyler.jpg')}
        //   />
        // </ScrollView>
*/}
      </View>
    </>
  );
}
