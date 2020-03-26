import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Header from './Navbar.js';
import {StyleSheet} from 'react-native';
import LowLevel from './CategoryScreenComponents/LowLevel.js';
import HighLevel from './CategoryScreenComponents/HighLevel.js';
import {View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const Tab = createMaterialTopTabNavigator();

export default function TopBarLowLevel() {
  return (
    <>
      <View style={styles.container}>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {
              fontSize: 16,
              fontFamily: 'Montserrat-Bold',
            },
           // tabStyle: {width: 210, elevation: 0, shadowOpacity: 0},
            style: {
              elevation: 0, //for android.
              backgroundColor: 'transparent',
              shadowOpacity: 0, //for ios
            },
          }}>
          <Tab.Screen name="LowLevel" component={LowLevel} />
          <Tab.Screen name="High Level" component={HighLevel} />
        </Tab.Navigator>
      </View>
    </>
  );
}
