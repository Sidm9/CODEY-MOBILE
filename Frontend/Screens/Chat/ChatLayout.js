/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import ChatHeader from '../../Components/ChatHeader';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: '4%',
    color: 'black',
    fontFamily: 'Montserrat-Regular',
    flexGrow: 1,
  },
  textInputAndButtonContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    minWidth: '80%',
    position: 'relative',
  },
  chatArea: {
    flex: 1,
  },
  item: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  sendButton: {
    width: 45,
    height: 45,
  },
  buttonS: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  chat_text: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    fontSize: 17,
  },
});

export default function ChatLayout({navigation}) {
  let [array, setarray] = useState([{title: 'Default Text'}]);
  const [textString, settextString] = useState('');

  useEffect(() => {
    return () => {
      console.log(array);
    };
  });

  function reset() {
    settextString();
  }

  function joindata() {
    console.log('You Entered :' + textString);
    setarray(array.concat({title: textString}));
    console.log('The New Element is Added');
    reset();
  }

  function Item({title}) {
    return (
      <View style={styles.item}>
        <Text style={styles.chat_text}>{title}</Text>
      </View>
    );
  }

  return (
    <>
      <View style={{flex: 1}}>
        <ChatHeader title="Hakoona Matata" />
        <View style={styles.container}>
          <View style={styles.textInputAndButtonContainer}>
            <TouchableOpacity>
              <View style={styles.buttonS}>
                <Image
                  source={require('../../assets/images/gallery.png')}
                  style={styles.sendButton}
                />
              </View>
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              multiline={true}
              value={textString}
              placeholder="Enter Message"
              placeholderTextColor="black"
              onChangeText={data => settextString(data)}
            />
            <TouchableOpacity onPress={joindata}>
              <View style={styles.buttonS}>
                <Image
                  source={require('../../assets/images/sendWhiteBG.png')}
                  style={styles.sendButton}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.chatArea}>
            <FlatList
              data={array}
              renderItem={({item}) => <Item title={item.title} />}
            />
          </View>
        </View>
      </View>
    </>
  );
}
