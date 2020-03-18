import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  inputStyle: {
    width: 300,
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    marginRight: 0,
  },
  icon: {
    alignSelf: 'center',
    height: 20,
    width: 20,
    marginLeft: 10,
    marginBottom : 0,
    borderColor: 'black',
  },
  inputContainer: {
    margin: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: 'black',
    width: 380,
    backgroundColor: '#eae9ed',
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    flexDirection: 'row',
  },
});

export default function SearchBar(props) {
  const [toggler, passToggle] = useState(true);
  console.log(toggler);
  console.log('---FRESH!!!---');
  function toggle() {
    passToggle(!props.password);
  }
  return (
    <>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={toggle}>
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
          placeholder="Search Anything"
          secureTextEntry={props.password}
        />
      </View>
    </>
  );
}