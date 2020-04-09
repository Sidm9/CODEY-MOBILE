import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet, Image} from 'react-native';
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
    marginVertical: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    // borderBottomWidth: 1,
    borderColor: 'black',
  },
  person_name: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
    //fontSize: 17,
    marginVertical: 1,
    //borderWidth: 1,
  },
  recent_chat: {
    color: 'black',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    padding: 1,
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
    borderWidth: 1,
    flex: 1,
    backgroundColor: 'yellow',
  },
  image_container: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    marginRight: 1,
    // borderWidth :4,
  },
  image: {
    alignSelf: 'center',
    width: '83%',
    height: '83%',
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

  function ChatsList({person_name, recent_chat}) {
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
            <View>
              <Text> ONLINE</Text>
            </View>
            <View>
              <Text> TIMESPAMP </Text>
            </View>
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
            <ChatsList
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
