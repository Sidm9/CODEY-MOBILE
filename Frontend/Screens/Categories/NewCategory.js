/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TopBarLowLevel from '../../Components/TopBarLowLevel';
import Header from '../../Components/Navbar';

const styles = StyleSheet.create({
  Button1: {
    marginTop: 10,
    marginBottom : 10,
    marginLeft: 10,
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
  },
  Button2: {
    margin: 10,
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: 'grey',
  },
  staticButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    margin: 2,
    alignItems: 'center',
    alignContent :"flex-start",
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
  },
});

export default function NewCategory({navigation}) {
  return (
    <>
      <View style={styles.container}>
        {/*  <Header title="Categories " /> */}
        <View style={styles.staticButtonsContainer}>
          <Text style={styles.Button1}>Languages</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('CategoryFramework')}>
            <Text style={styles.Button2}>Frameworks</Text>
          </TouchableOpacity>
        </View>
        <TopBarLowLevel />
      </View>
    </>
  );
}
