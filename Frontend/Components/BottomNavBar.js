import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Categories from '../Screens/Categories';
import Profile from '../Screens/Profile';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Posts from '../Screens/Posts';
import Playground from '../Screens/Playground';

const Tab = createBottomTabNavigator();
export default function BottomNavBar() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Posts} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Playground" component={Playground} />
      </Tab.Navigator>
    </>
  );
}
