import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Easein from '../Animations/Easein';

const styles = StyleSheet.create({
  inputStyle: {
    width: '99%',
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    marginRight: 0,
  },
  icon: {
    alignSelf: 'center',
    height: 20,
    width: 20,
    marginLeft: 10,
    borderColor: 'black',
  },
  inputContainer: {
    margin: 10,
    borderBottomColor: 'black',
    width: '90%',
    backgroundColor: '#eae9ed',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    flexDirection: 'row',
  },
});

export default function SearchBar(props) {
  return (
    <>
      <Easein style={styles.inputContainer}>
        <TouchableOpacity>
          {/*       <Image style={styles.icon} source={props.icon} /> */}
          <Image
            style={styles.icon}
            source={require('../assets/icons/whiteSearch.png')}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.inputStyle}
          //placeholder={props.placeholder}
          placeholderTextColor="black"
          placeholder={props.title}
        />
      </Easein>
    </>
  );
}
