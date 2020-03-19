import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Languages from '../Screens/Languages.js';
import Frameworks from '../Screens/Frameworks.js';
import Header from './Header.js';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Low Level Languages!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
      <Header title="Categories" />
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {fontSize: 16, fontFamily: 'Montserrat-Bold'},
          tabStyle: {width: 160},
          style: {backgroundColor: 'white'},
        }}>
        <Tab.Screen name="Languages" component={Languages} />
        <Tab.Screen name="Frameworks" component={Frameworks} />
      </Tab.Navigator>
    </>
  );
}
