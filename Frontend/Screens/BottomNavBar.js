import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Categories from './Categories/NewCategory';
import {Image, StyleSheet} from 'react-native';
import Posts from './Posts';
import Playground from './Playground';
import CategoriesIcon from '../assets/icons/list.png';
import HomeIcon from '../assets/icons/Home.png';
import PlaygroundIcon from '../assets/icons/data.png';
import HomeIconFocused from '../assets/icons/HomePressed.png';
import CategoriesIconFocused from '../assets/icons/listPressed.png';
import PlaygroundIconFocused from '../assets/icons/dataPressed.png';

const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
});
export default function BottomNavBar() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              if (focused) {
                return <Image source={HomeIconFocused} style={styles.image} />;
              } else {
                return <Image source={HomeIcon} style={styles.image} />;
              }
            } else if (route.name === 'Categories') {
              if (focused) {
                return (
                  <Image source={CategoriesIconFocused} style={styles.image} />
                );
              } else {
                return <Image source={CategoriesIcon} style={styles.image} />;
              }
            } else if (route.name === 'Playground') {
              if (focused) {
                return (
                  <Image source={PlaygroundIconFocused} style={styles.image} />
                );
              } else {
                return <Image source={PlaygroundIcon} style={styles.image} />;
              }
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'black',
          labelStyle: {fontFamily: 'Montserrat-Medium', fontSize: 13},
          showIcon: true,
        }}>
        <Tab.Screen name="Home" component={Posts} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Playground" component={Playground} />
      </Tab.Navigator>
    </>
  );
}
