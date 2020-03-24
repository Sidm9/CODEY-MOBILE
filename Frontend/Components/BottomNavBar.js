/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Categories from '../Screens/Categories';
import { Image, StyleSheet } from 'react-native';
import Posts from '../Screens/Posts';
import Playground from '../Screens/Playground';
import CategoriesIcon from '../assets/icons/list.png';
import HomeIcon from '../assets/icons/Home.png';
import PlaygroundIcon from '../assets/icons/data.png';

const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
});
export default function BottomNavBar() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {

            if ( route.name === 'Home') {
            return <Image source={HomeIcon}
              style={styles.image} />;
            }

            else if ( route.name === 'Categories') {
              return <Image source={CategoriesIcon}
                style={styles.image} />;
              }

              else if ( route.name === 'Playground') {
                return <Image source={PlaygroundIcon}
                  style={styles.image} />;
                }

              
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'grey',
          showIcon: true,
        }}>
        <Tab.Screen name="Home" component={Posts} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Playground" component={Playground} />
      </Tab.Navigator>
    </>
  );
}
