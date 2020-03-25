import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TopBarLowLevel from '../../Components/TopBarLowLevel';
import Header from '../../Components/Navbar';

const styles = StyleSheet.create({
  sf26c0311: {
    padding: 10,
    fontSize: 25,
  },
  Button1: {
    margin: 10,
    marginLeft: 10,
    fontSize: 28,
    fontFamily: 'Montserrat-Bold',
  },
  Button2: {
    margin: 10,
    fontFamily: 'Montserrat-Regular',
    fontSize: 28,
  },
  staticButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    margin: 2,
    alignItems: 'center',
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
        <Header title="Categories " />
        <View style={styles.staticButtonsContainer}>
          <Text style={styles.Button1}>Language</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('CategoryFramework')}>
            <Text style={styles.Button2}>FrameWorks</Text>
          </TouchableOpacity>
        </View>
        <TopBarLowLevel />
      </View>
    </>
  );
}
