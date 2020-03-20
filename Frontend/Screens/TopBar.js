import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Languages from '../Components/Languages.js';
import Frameworks from '../Components/Frameworks.js';
import Header from '../Components/Header.js';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
      <Header title="Categories" />
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 16,
            fontFamily: 'Montserrat-Bold',
          },
          tabStyle: {width: 180, elevation: 0, shadowOpacity: 0},
          style: {
            elevation: 0, //for android
             backgroundColor: 'transparent',
            shadowOpacity: 0, //for ios
          },
        }}>
        <Tab.Screen name="Languages" component={Languages} />
        <Tab.Screen name="Frameworks" component={Frameworks} />
      </Tab.Navigator>
    </>
  );
}
