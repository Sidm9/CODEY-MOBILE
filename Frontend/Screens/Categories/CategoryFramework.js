import React, {Fragment} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../../Components/Navbar';

const styles = StyleSheet.create({
  Button1: {
    margin: 10,
    marginLeft: 10,
    fontSize : 28,
    fontFamily: 'Montserrat-Regular',
    color: 'grey',
  },
  Button2: {
    margin: 10,
    fontFamily: 'Montserrat-Bold',
    fontSize : 28,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -2, height: 1},
    textShadowRadius: 3,
  },
  topBarContainer: {
    backgroundColor: 'rgba(230, 230, 30, 0.1)',
    flexDirection: 'row',
    width: '100%',
    height: 40,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
   // backgroundColor: 'rgba(230, 24, 24, 1)',
  },
});

export default function CategoryFrameWork({navigation}) {
  return (
    <Fragment>
      <View style={styles.container}>
     {/* <Header title="Categories " />*/ }
        <View style={styles.topBarContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('NewCategory')}>
            <Text style={styles.Button1}>Languages</Text>
          </TouchableOpacity>
          <Text style={styles.Button2}>Frameworks</Text>
        </View>
      </View>
    </Fragment>
  );
}