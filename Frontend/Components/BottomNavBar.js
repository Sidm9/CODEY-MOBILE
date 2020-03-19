import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Categories from '../Screens/Categories';
import {Image} from 'react-native';
import Posts from '../Screens/Posts';
import Playground from '../Screens/Playground';
import homeBlack from '../assets/icons/outline_home_black_36dp.png';
import homewhite from '../assets/icons/outline_home_white_36dp.png';

const Tab = createBottomTabNavigator();

export default function BottomNavBar() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? {homeBlack} : {homewhite};
            } else if (route.name === 'Settings') {
              iconName = focused ? {homeBlack} : {homewhite};
            }
            // You can return any component that you like here!
            return <Image name={homeBlack} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'grey',
        }}>
        <Tab.Screen name="Home" component={Posts} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Playground" component={Playground} />
      </Tab.Navigator>
    </>
  );
}
