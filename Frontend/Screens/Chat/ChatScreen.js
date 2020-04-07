import React from 'react';
import {Text, View} from 'react-native';
import List from '../../Components/SettingsComponents/List';
import Header from '../../Components/Navbar';
import Heading from '../../Components/Heading';
import {ScrollView} from 'react-native-gesture-handler';
export default function ChatScreen({navigation}, props) {
  return (
    <>
      <View style={{flex: 1}}>
        <ScrollView>
          <Heading title="Chats" click={() => navigation.navigate('Profile')} />
          <List
            title="Person 1"
            brief="Before you speak, listen. Before you write, think. Before you spend, earn. "
            img={require('../../assets/images/tyler.jpg')}
          />
          <List
            title="Person 2"
            brief="It is not the man who has too little, but the man who craves more, that is poor."
            img={require('../../assets/images/tyler.jpg')}
          />
          <List
            title="Person 3"
            brief="Not he who has much is rich, but he who gives much."
            img={require('../../assets/images/tyler.jpg')}
          />
          <List
            title="Person 4"
            brief="This is something else"
            img={require('../../assets/images/tyler.jpg')}
          />
          <List
            title="Person 5"
            brief="Before you speak, listen. Before you write, think. Before you spend, earn. "
            img={require('../../assets/images/tyler.jpg')}
          />
        </ScrollView>
      </View>
    </>
  );
}
