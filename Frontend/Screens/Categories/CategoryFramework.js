import React, {Fragment} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../../Components/Navbar';

const styles = StyleSheet.create({
  sf26c0311: {
    padding: 10,
    fontSize: 25,
  },
  Button1: {
    margin: 10,
    marginLeft: 40,
    fontSize : 20,
    fontFamily: 'Montserrat-Regular',
  },
  Button2: {
    margin: 10,
    fontFamily: 'Montserrat-Bold',
    fontSize : 20,
  },
  s1c3ee819: {
    //backgroundColor: 'rgba(230, 230, 30, 1)',
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
      <Header title="Categories " />
        <View style={styles.s1c3ee819}>
          <TouchableOpacity onPress={() => navigation.navigate('NewCategory')}>
            <Text style={styles.Button1}>Language</Text>
          </TouchableOpacity>
          <Text style={styles.Button2}>FrameWorks</Text>
        </View>
      </View>
    </Fragment>
  );
}