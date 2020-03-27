/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Card from '../Components/Card';
import Header from '../Components/Navbar';
import Heading from '../Components/Heading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default function Posts({navigation}, props) {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
        <Heading title="Feed" click={() => navigation.navigate('Profile')} /> 
          <Card open={() => navigation.navigate('Article')} />
          <Card open={() => navigation.navigate('Article')} />
          <Card open={() => navigation.navigate('Article')} />
          <Card open={() => navigation.navigate('Article')} />
          <Card open={() => navigation.navigate('Article')} />
          <Card open={() => navigation.navigate('Article')} />
        </ScrollView>
      </View>
    </>
  );
}
