/* eslint-disable no-unused-vars */
import * as React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Article from '../Screens/ArticleHeader.js';
import login from './Login.js';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const Stack = createStackNavigator();

export default function ArticleHeader({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Article"
        component={login}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}s
              title="Info"
              color="#00cc00"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
