import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

const styles = StyleSheet.create({
  inputStyle: {
    width: 300,
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    marginLeft: 10,
  },
  icon: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    marginRight: 10,
  },
  inputContainer: {
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: 350,
    //backgroundColor: 'rgba(242, 224, 224, 1)',
    //height: 40,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
});

export default function PlaceHolders(props) {
  const [showPass, set] = useState(true);

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder={props.placeholder}
          placeholderTextColor="black"
        />
        <TouchableOpacity>
          <Image style={styles.icon} source={props.icon} />
        </TouchableOpacity>
      </View>
    </>
  );
}
