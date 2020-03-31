import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    // borderWidth: 5,
  },
  textDescription: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 11,
    height :null,
  },
  listText: {
    height: '100%',
    flex: 1,
    //  borderWidth: 1,
    flexWrap: 'nowrap',
    justifyContent: "flex-start",
    flexDirection: 'column',
  },
  iconContainer: {
    width: 50,
    height: '100%',
    //borderWidth : 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemsContainer: {
    width : '100%',
    // borderWidth :3 ,
    height : 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom : '2%',
    marginTop : '2%',
    alignSelf: 'baseline',
    paddingRight: 10,
    borderBottomWidth: 0.8,
  },
  icon: {
    alignSelf: 'center',
    width: 30,
    height: 30,
  },
  iconLeft: {
    alignSelf: 'center',
    width: 30,
    height: '63%',
    marginRight: 5,
    // borderWidth: 4,
  },
  iconLeftContainer: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    marginRight: 5,
    // borderWidth :4,
  },
});

export default function List(props) {
  return (
    <>
      <TouchableOpacity style={styles.listItemsContainer} onPress = {props.click}>
        <View style={styles.iconLeftContainer}>
          <Image source={props.img} style={styles.iconLeft} />
        </View>
        <View style={styles.listText}>
          <Text style={styles.textStyle}>{props.title}</Text>
          <Text style={styles.textDescription}>{props.brief}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableNativeFeedback
            useForeground={true}
            background={TouchableNativeFeedback.Ripple('white', true)}
              onPress={props.click}>
              <Image
                source={require('../../assets/icons/arrowWhite.png')}
                style={styles.icon}
              />
            </TouchableNativeFeedback>
          </View>

        </TouchableOpacity>

    </>
  );
}
