/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from './Navbar.js';
import { StyleSheet } from 'react-native';
import LowLevel from './CategoryScreenComponents/LowLevel.js';
import HighLevel from './CategoryScreenComponents/HighLevel.js';
import { View } from 'react-native';
const Tab = createMaterialTopTabNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default function TopBarLowLevel() {
  return (
    <>
      <View style={styles.container}>
        <Tab.Navigator lazy={true}
          tabBarOptions={{
            labelStyle: {
              fontSize: 16,
              fontFamily: 'Montserrat-Bold',
            },
            indicatorStyle: {
              width: 105,
              marginLeft: 10,
            },
            tabStyle:
            {
              justifyContent: "flex-start",
              width: 130, alignContent: "flex-start",
              alignItems: "baseline",
              elevation: 0,
              shadowOpacity: 0,
            },
            style: {
              elevation: 0, //for android.
              backgroundColor: 'transparent',
              shadowOpacity: 0, //for ios
            },
          }}>
          <Tab.Screen name="Low Level" component={LowLevel} />
          <Tab.Screen name="High Level" component={HighLevel} />
        </Tab.Navigator>
      </View>
    </>
  );
}
