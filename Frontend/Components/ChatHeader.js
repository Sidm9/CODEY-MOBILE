import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    borderBottomWidth: 1.5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Text: {
    width: null,
    fontSize: 25,
    fontFamily: 'Montserrat-SemiBold',
    //borderWidth: 3,
  },
  go_back_button: {
    width: '1%',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    marginVertical: '1%',
    //borderWidth: 3,
  },
  burger_button: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    marginVertical: '1%',
    justifyContent: 'flex-end',
    //borderWidth: 3,
  },
  header_icons: {
    height: 33,
    width: 33,
    marginHorizontal: '10%',
    //borderWidth: 4,
    borderColor: 'black',
  },
});
export default function ChatHeader(props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.go_back_button}>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/backWhiteBG.png')}
              style={styles.header_icons}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.Text}>{props.title}</Text>
        <View style={styles.burger_button}>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/burgerWhiteBG.png')}
              style={styles.header_icons}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
